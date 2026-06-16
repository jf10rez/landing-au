"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";

export interface BookingState {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;

async function getClientIp(): Promise<string> {
  const h = await headers();
  const forwardedFor = h.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  const realIp = h.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

function sanitizeInput(value: string): string {
  return value.trim().replace(/[<>]/g, "");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitBooking(
  _prevState: BookingState | null,
  formData: FormData
): Promise<BookingState> {
  try {
    const ip = await getClientIp();

    if (!checkRateLimit(ip)) {
      return {
        success: false,
        message:
          "Has enviado demasiadas solicitudes. Por favor, espera un momento e intenta de nuevo.",
      };
    }

    const rawName = formData.get("name");
    const rawEmail = formData.get("email");
    const rawPhone = formData.get("phone");
    const rawMessage = formData.get("message");
    const honeypot = formData.get("website");

    if (honeypot && honeypot.toString().length > 0) {
      return { success: true, message: "" };
    }

    const name = sanitizeInput(rawName?.toString() ?? "");
    const email = sanitizeInput(rawEmail?.toString() ?? "").toLowerCase();
    const phone = sanitizeInput(rawPhone?.toString() ?? "");
    const message = sanitizeInput(rawMessage?.toString() ?? "");

    const errors: Record<string, string[]> = {};

    if (name.length < 2 || name.length > 100) {
      errors.name = ["El nombre debe tener entre 2 y 100 caracteres."];
    }

    if (!isValidEmail(email)) {
      errors.email = ["Por favor, introduce un correo electrónico válido."];
    }

    if (message.length < 10 || message.length > 2000) {
      errors.message = [
        "Cuéntanos un poco más sobre tu proceso (entre 10 y 2000 caracteres).",
      ];
    }

    if (phone.length > 50) {
      errors.phone = ["El teléfono es demasiado largo."];
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: "Por favor, revisa los campos marcados.",
        errors,
      };
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const emailTo = process.env.BOOKING_EMAIL_TO;
    const emailFrom = process.env.BOOKING_EMAIL_FROM;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !emailTo || !emailFrom) {
      console.error("[booking] Missing SMTP environment variables");
      return {
        success: false,
        message:
          "No se pudo enviar la solicitud en este momento. Intenta de nuevo más tarde.",
      };
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlBody = `
      <h2>Nueva solicitud de diagnóstico</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>` : ""}
      <p><strong>Proceso a automatizar:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      <hr />
      <p style="font-size: 12px; color: #666;">
        Enviado el ${new Date().toLocaleString("es-ES", {
          dateStyle: "full",
          timeStyle: "short",
        })}
      </p>
    `;

    const textBody = `
Nueva solicitud de diagnóstico

Nombre: ${name}
Email: ${email}
${phone ? `Teléfono: ${phone}\n` : ""}Proceso a automatizar:
${message}

Enviado el: ${new Date().toLocaleString("es-ES")}
    `.trim();

    await transporter.sendMail({
      from: `"Ilaxus Landing" <${emailFrom}>`,
      to: emailTo,
      replyTo: email,
      subject: `Nueva solicitud de diagnóstico — ${name}`,
      text: textBody,
      html: htmlBody,
    });

    return {
      success: true,
      message:
        "Mensaje enviado. Revisaremos tu solicitud y te contactaremos pronto.",
    };
  } catch (error) {
    console.error("[booking] Error sending email:", error);
    return {
      success: false,
      message:
        "No se pudo enviar la solicitud en este momento. Intenta de nuevo más tarde.",
    };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

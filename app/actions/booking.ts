"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { isLocale, type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/dictionaries";
import { format } from "@/app/lib/i18n/utils";

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

function resolveLocale(value: FormDataEntryValue | null): Locale {
  const raw = value?.toString() ?? "";
  return isLocale(raw) ? raw : "en";
}

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
  const locale = resolveLocale(formData.get("locale"));
  const messages = getDictionary(locale).bookingFeedback;

  try {
    const ip = await getClientIp();

    if (!checkRateLimit(ip)) {
      return {
        success: false,
        message: messages.rateLimited,
      };
    }

    const rawName = formData.get("name");
    const rawEmail = formData.get("email");
    const rawPhone = formData.get("phone");
    const rawMessage = formData.get("message");
    const honeypot = formData.get("website_hp");

    if (honeypot && honeypot.toString().length > 0) {
      return {
        success: true,
        message: messages.success,
      };
    }

    const name = sanitizeInput(rawName?.toString() ?? "");
    const email = sanitizeInput(rawEmail?.toString() ?? "").toLowerCase();
    const phone = sanitizeInput(rawPhone?.toString() ?? "");
    const message = sanitizeInput(rawMessage?.toString() ?? "");

    const errors: Record<string, string[]> = {};

    if (name.length < 2 || name.length > 100) {
      errors.name = [messages.errors.name];
    }

    if (!isValidEmail(email)) {
      errors.email = [messages.errors.email];
    }

    if (message.length < 10 || message.length > 2000) {
      errors.message = [messages.errors.message];
    }

    if (phone.length > 50) {
      errors.phone = [messages.errors.phone];
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: messages.reviewFields,
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
        message: messages.errorSend,
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

    const subject = format(messages.emailSubject, { name });
    const sentOn = `${messages.emailSentLabel}: ${new Date().toLocaleString(
      locale === "es" ? "es-ES" : "en-US",
      { dateStyle: "full", timeStyle: "short" }
    )}`;

    const htmlBody = `
      <h2>${escapeHtml(subject)}</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
      <p><strong>Process to automate:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      <hr />
      <p style="font-size: 12px; color: #666;">
        ${escapeHtml(sentOn)}
      </p>
    `;

    const textBody = `
${subject}

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ""}Process to automate:
${message}

${sentOn}
    `.trim();

    await transporter.sendMail({
      from: `"Ilaxus Landing" <${emailFrom}>`,
      to: emailTo,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return {
      success: true,
      message: messages.success,
    };
  } catch (error) {
    console.error("[booking] Error sending email:", error);
    return {
      success: false,
      message: messages.errorSend,
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
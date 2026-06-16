"use client";

import { useActionState, useEffect, useRef } from "react";
import { animate } from "animejs";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { Button } from "@/app/components/ui/Button";
import { submitBooking } from "@/app/actions/booking";
import { cn } from "@/app/lib/utils";
import { DURATIONS, EASINGS } from "@/app/lib/animations";

interface BookingFormProps {
  className?: string;
}

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  errors?: string[];
  as?: "input" | "textarea";
}

function FormField({
  id,
  label,
  type = "text",
  name,
  required = false,
  placeholder,
  errors,
  as = "input",
}: FormFieldProps) {
  const inputClasses = cn(
    "w-full rounded-lg border bg-bg-base px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary",
    "transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
    errors && errors.length > 0
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "border-border-default hover:border-border-hover"
  );

  return (
    <div className="space-y-1.5 text-left">
      <label htmlFor={id} className="block text-sm font-medium text-text-primary">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          required={required}
          placeholder={placeholder}
          className={cn(inputClasses, "resize-none")}
          aria-invalid={errors && errors.length > 0 ? "true" : "false"}
          aria-describedby={errors && errors.length > 0 ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={inputClasses}
          aria-invalid={errors && errors.length > 0 ? "true" : "false"}
          aria-describedby={errors && errors.length > 0 ? `${id}-error` : undefined}
        />
      )}
      {errors && errors.length > 0 && (
        <p id={`${id}-error`} className="text-xs text-red-500">
          {errors[0]}
        </p>
      )}
    </div>
  );
}

export function BookingForm({ className }: BookingFormProps) {
  const [state, formAction, isPending] = useActionState(submitBooking, null);
  const reduced = useReducedMotion();
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state?.success]);

  useEffect(() => {
    if (!statusRef.current || reduced || !state) return;

    const animation = animate(statusRef.current, {
      opacity: [0, 1],
      translateY: [-8, 0],
      duration: DURATIONS.normal,
      easing: EASINGS.outExpo,
      autoplay: true,
    });

    return () => {
      animation.pause();
    };
  }, [state, reduced]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className={cn("space-y-5 text-left", className)}
      noValidate
    >
      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <FormField
        id="name"
        name="name"
        label="Nombre"
        required
        placeholder="Tu nombre"
        errors={state?.errors?.name}
      />

      <FormField
        id="email"
        name="email"
        type="email"
        label="Correo electrónico"
        required
        placeholder="tu@empresa.com"
        errors={state?.errors?.email}
      />

      <FormField
        id="phone"
        name="phone"
        type="tel"
        label="Teléfono"
        placeholder="Opcional"
        errors={state?.errors?.phone}
      />

      <FormField
        id="message"
        name="message"
        label="¿Qué proceso te gustaría automatizar?"
        required
        placeholder="Cuéntanos brevemente qué tareas repetitivas quieres eliminar..."
        errors={state?.errors?.message}
        as="textarea"
      />

      <Button
        type="submit"
        size="lg"
        disabled={isPending}
        className="w-full shadow-[0_0_20px_rgba(255,0,51,0.22)] sm:shadow-[0_0_32px_rgba(255,0,51,0.3)]"
      >
        {isPending ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Enviando...
          </span>
        ) : (
          "Solicitar diagnóstico"
        )}
      </Button>

      {state && (
        <div
          ref={statusRef}
          role="status"
          className={cn(
            "rounded-lg px-4 py-3 text-center text-sm",
            state.success
              ? "border border-green-500/30 bg-green-500/10 text-green-400"
              : "border border-red-500/30 bg-red-500/10 text-red-400"
          )}
        >
          {state.message}
        </div>
      )}
    </form>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { LanguageSwitcher } from "@/app/components/ui/LanguageSwitcher";
import type { Locale } from "@/app/lib/i18n/config";
import type { Messages } from "@/app/lib/i18n/dictionaries";
import { format, localizedHref } from "@/app/lib/i18n/utils";
import {
  CONTACT,
  EMAIL_HREF,
  PHONE_HREF,
  whatsappUrl,
} from "@/app/lib/contact";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Messages;
}) {
  const t = dict.footer;
  const links = t.links.map((link) => ({
    ...link,
    href: localizedHref(locale, link.href),
  }));

  return (
    <footer className="border-t border-border-default bg-bg-base">
      <Container>
        {/* Animated top line */}
        <div className="relative h-px w-full overflow-hidden">
          <div className="absolute inset-0 origin-center scale-x-0 animate-line-reveal bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        </div>

        <div className="flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between md:py-16">
          <ScrollReveal>
            <Link href={`/${locale}`} className="inline-block" aria-label={t.ariaHome}>
              <Image
                src="/logo-ilaxus.webp"
                alt="Ilaxus"
                width={3072}
                height={2048}
                sizes="(max-width: 768px) 84px, 105px"
                className="h-14 w-auto md:h-[4.375rem]"
              />
              <span className="sr-only">Ilaxus</span>
            </Link>
          </ScrollReveal>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-6">
            {links.map((link) => (
              <ScrollReveal key={link.href} delay={20}>
                <Link
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <LanguageSwitcher locale={locale} />
            {t.social.map((s) => (
              <ScrollReveal key={s.label} delay={40}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-tertiary transition-colors duration-200 hover:text-text-secondary"
                >
                  {s.label}
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Contacto directo */}
        <div className="flex flex-col items-center gap-2 border-t border-border-default py-8 text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
            {t.contactTitle}
          </span>
          <a
            href={EMAIL_HREF}
            aria-label={dict.contact.emailAria}
            className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            {CONTACT.email}
          </a>
          <a
            href={PHONE_HREF}
            aria-label={dict.contact.phoneAria}
            className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={whatsappUrl(dict.contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.contact.whatsappAria}
            className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            WhatsApp
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-border-default py-8 text-center">
          <p className="text-xs text-text-tertiary">
            {format(t.rights, { year: new Date().getFullYear() })}
          </p>
          <p className="text-xs text-text-tertiary">
            {t.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}

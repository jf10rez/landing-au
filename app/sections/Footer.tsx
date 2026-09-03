import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { LanguageSwitcher } from "@/app/components/ui/LanguageSwitcher";
import type { Locale } from "@/app/lib/i18n/config";
import type { Messages } from "@/app/lib/i18n/dictionaries";
import { format, localizedHref } from "@/app/lib/i18n/utils";

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
                src="/logo-ilaxus-800.webp"
                alt="Ilaxus"
                width={800}
                height={450}
                sizes="100px"
                className="h-14 w-auto"
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
                <Link
                  href={s.href}
                  className="text-sm text-text-tertiary transition-colors duration-200 hover:text-text-secondary"
                >
                  {s.label}
                </Link>
              </ScrollReveal>
            ))}
          </div>
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
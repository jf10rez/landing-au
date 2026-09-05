"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { LanguageSwitcher } from "@/app/components/ui/LanguageSwitcher";
import { cn } from "@/app/lib/utils";
import type { Locale } from "@/app/lib/i18n/config";
import type { Messages } from "@/app/lib/i18n/dictionaries";
import { localizedHref } from "@/app/lib/i18n/utils";

interface NavbarProps {
  locale: Locale;
  t: Messages["nav"];
  activeHref?: string;
}

export function Navbar({ locale, t, activeHref }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    let current = window.scrollY > 60;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 60;
        if (next !== current) {
          current = next;
          setScrolled(next);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const links = t.links.map((link) => ({
    ...link,
    href: localizedHref(locale, link.href),
  }));

  const isActive = (href: string) => href === activeHref;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300",
        "bg-bg-base/80 backdrop-blur-xl border-border-default",
        "md:border-transparent",
        scrolled && "md:bg-bg-base/80 md:backdrop-blur-xl md:border-border-default"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href={`/${locale}`} className="shrink-0">
            <Image
              src="/logo-ilaxus.webp"
              alt="Ilaxus"
              width={3072}
              height={2048}
              priority
              sizes="(max-width: 768px) 96px, 108px"
              className="h-15 w-auto md:h-17"
            />
            <span className="sr-only">Ilaxus</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary",
                  isActive(link.href) && "text-text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={localizedHref(locale, "/#pricing")}
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-accent px-3 text-xs font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_16px_rgba(255,0,51,0.3)] sm:px-4"
            >
              <span className="hidden sm:inline">{t.cta}</span>
              <span className="sm:hidden">{t.ctaShort}</span>
            </Link>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <div className="-mx-4 overflow-x-auto border-t border-border-default/60 px-4 pb-2 md:hidden">
          <div className="flex min-w-max items-center gap-2 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex min-h-10 items-center rounded-md px-3 text-xs text-text-secondary transition-colors duration-200 hover:bg-white/5 hover:text-text-primary",
                  isActive(link.href) && "text-text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
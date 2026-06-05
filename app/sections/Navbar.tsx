"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { cn } from "@/app/lib/utils";

export function Navbar() {
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

  const links = [
    { href: "#productos", label: "Productos" },
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#casos", label: "Casos" },
    { href: "#pricing", label: "Agendar" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-bg-base/80 backdrop-blur-xl border-b border-border-default"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 font-mono text-sm font-medium tracking-wider text-text-primary"
          >
            ILAXUS
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#pricing"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-accent px-3 text-xs font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_16px_rgba(255,0,51,0.3)] sm:px-4"
          >
            <span className="hidden sm:inline">Agendar llamada</span>
            <span className="sm:hidden">Agendar</span>
          </a>
        </div>

        <div className="-mx-4 overflow-x-auto border-t border-border-default/60 px-4 pb-2 md:hidden">
          <div className="flex min-w-max items-center gap-2 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-10 items-center rounded-md px-3 text-xs text-text-secondary transition-colors duration-200 hover:bg-white/5 hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}

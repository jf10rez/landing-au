"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { cn } from "@/app/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-wider text-text-primary"
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
            className="rounded-lg bg-accent px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_16px_rgba(255,0,51,0.3)]"
          >
            Agendar llamada
          </a>
        </div>
      </Container>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { SectionWrapper } from "@/app/components/layout/SectionWrapper";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { faq } from "@/app/data/faq";
import { cn } from "@/app/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <SectionWrapper id="faq" className="bg-bg-surface">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              FAQ
            </span>
            <h2 className="font-sans text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.01em] text-text-primary">
              Preguntas frecuentes
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-3">
            {faq.map((item, i) => {
              const isOpen = openId === item.id;
              return (
                <ScrollReveal key={item.id} delay={i * 50}>
                  <div
                    className={cn(
                      "rounded-xl border border-border-default bg-bg-base transition-all duration-200",
                      isOpen && "border-border-hover"
                    )}
                  >
                    <h3 className="m-0">
                      <button
                        onClick={() => toggle(item.id)}
                        className="flex w-full items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
                        aria-expanded={isOpen}
                      >
                        <span className="font-sans text-base font-medium text-text-primary pr-4">
                          {item.question}
                        </span>
                        <span
                          className={cn(
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent transition-transform duration-300",
                            isOpen && "rotate-45"
                          )}
                          aria-hidden
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M6 1v10M1 6h10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>

                    <div
                      className="grid transition-[grid-template-rows] duration-300"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 text-sm leading-relaxed text-text-secondary">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

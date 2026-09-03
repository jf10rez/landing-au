"use client";

import { useState } from "react";
import { ScrollReveal } from "@/app/components/animation/ScrollReveal";
import { cn } from "@/app/lib/utils";

export interface FAQAccordionItem {
  id: string;
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQAccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = openId === item.id;
          return (
            <ScrollReveal key={item.id} delay={i * 50}>
              <div
                className={cn(
                  "rounded-lg border border-border-default bg-bg-base transition-all duration-200",
                  isOpen && "border-border-hover"
                )}
              >
                <h3 className="m-0">
                  <button
                    onClick={() => toggle(item.id)}
                    className="flex min-h-14 w-full items-center justify-between p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface sm:p-5"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 font-sans text-sm font-medium leading-relaxed text-text-primary sm:text-base">
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

                <div hidden={!isOpen}>
                  <div>
                    <div className="px-4 pb-4 text-sm leading-relaxed text-text-secondary sm:px-5 sm:pb-5">
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
  );
}
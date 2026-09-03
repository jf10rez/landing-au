"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { Container } from "@/app/components/ui/Container";
import type { Messages } from "@/app/lib/i18n/dictionaries";

gsap.registerPlugin(ScrollTrigger);

type HowItWorksCopy = Messages["howItWorks"];

export function HowItWorksHorizontal({ t }: { t: HowItWorksCopy }) {
  const steps = t.steps;
  const pinnedRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !trackRef.current || !pinnedRef.current) return;

      const getScrollAmount = () => {
        return trackRef.current!.scrollWidth - window.innerWidth;
      };

      const scrollTween = gsap.to(trackRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: pinnedRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      if (headerRef.current) {
        gsap.to(headerRef.current, {
          opacity: 0,
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: pinnedRef.current,
            start: "top top",
            end: () => `+=${getScrollAmount() * 0.15}`,
            scrub: 1,
          },
        });
      }

      const panels = trackRef.current.querySelectorAll("[data-step]");
      panels.forEach((panel, i) => {
        const number = panel.querySelector("[data-step-number]");
        const content = panel.querySelector("[data-step-content]");
        const isFirst = i === 0;

        if (number) {
          gsap.set(number, { opacity: isFirst ? 1 : 0.2 });

          gsap.to(number, {
            keyframes: isFirst
              ? [{ opacity: 1 }, { opacity: 0.2 }]
              : [{ opacity: 0.2 }, { opacity: 1 }, { opacity: 0.2 }],
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: isFirst ? "left left" : "left right",
              end: "right left",
              scrub: 1,
            },
          });
        }

        if (content) {
          if (isFirst) {
            gsap.set(content, { y: 0, opacity: 1 });
          } else {
            gsap.from(content, {
              y: 30,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 75%",
                end: "left 35%",
                scrub: 1,
              },
            });
          }
        }
      });

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
    { scope: pinnedRef }
  );

  if (reduced) {
    return (
      <section id="como-funciona" className="bg-bg-surface py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="mb-10 max-w-2xl sm:mb-14 lg:mb-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
              {t.eyebrow}
            </span>
            <h2 className="font-sans text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-text-primary sm:text-[clamp(2.25rem,4vw,3rem)]">
              {t.title}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex min-w-0 flex-col gap-3 rounded-lg border border-border-default/70 bg-bg-base/35 p-5 md:border-0 md:bg-transparent md:p-0"
              >
                <span className="font-mono text-4xl font-medium text-text-tertiary">
                  {step.number}
                </span>
                <h3 className="font-sans text-lg font-semibold leading-snug text-text-primary lg:text-xl">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="como-funciona" className="bg-bg-surface overflow-hidden">
      <div ref={pinnedRef} className="relative h-screen">
        {/* Header: absolute inside pinned zone, fades out on scroll */}
        <div
          ref={headerRef}
          className="absolute inset-x-0 top-0 z-10 pt-20 sm:pt-24 lg:pt-28"
          style={{ willChange: "transform, opacity" }}
        >
          <Container>
            <div className="max-w-2xl">
              <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-accent">
                {t.eyebrow}
              </span>
              <h2 className="font-sans text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-text-primary sm:text-[clamp(2.25rem,4vw,3rem)]">
                {t.title}
              </h2>
            </div>
          </Container>
        </div>

        {/* Track: fills full viewport */}
        <div
          ref={trackRef}
          className="flex h-full w-max"
          style={{ willChange: "transform" }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              data-step
              className="flex h-full w-screen shrink-0 items-center justify-center px-8 sm:px-16 lg:px-24"
            >
              <div className="flex max-w-2xl flex-col items-start gap-6 pt-16 sm:pt-20">
                <span
                  data-step-number
                  className="font-mono text-[clamp(4rem,12vw,8rem)] font-bold text-accent leading-none"
                >
                  {step.number}
                </span>
                <div data-step-content>
                  <h3 className="font-sans text-2xl font-semibold leading-snug text-text-primary sm:text-3xl lg:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots: absolute overlay at bottom */}
        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className="h-1 w-8 rounded-full bg-text-tertiary/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface StackParallaxProps {
  children: React.ReactNode;
}

export function StackParallax({ children }: StackParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const floatingAnimations = useRef<gsap.core.Tween[]>([]);

  useGSAP(
    () => {
      if (reduced || !containerRef.current) return;

      const items = containerRef.current.querySelectorAll("[data-stack-item]");
      if (!items.length) return;

      gsap.from(items, {
        opacity: 0,
        scale: 0.85,
        y: 40,
        rotationX: 15,
        duration: 0.7,
        stagger: {
          each: 0.08,
          from: "start",
          grid: "auto",
        },
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      items.forEach((item, index) => {
        const delay = (index % 5) * 0.4;
        const duration = 3 + (index % 3) * 0.5;
        const yMovement = -4 - (index % 2) * 2;

        const tween = gsap.to(item, {
          y: yMovement,
          duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay,
        });

        floatingAnimations.current.push(tween);
      });
    },
    { scope: containerRef }
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reduced || !containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const items = container.querySelectorAll("[data-stack-item]");
      items.forEach((item) => {
        const htmlItem = item as HTMLElement;
        const itemRect = htmlItem.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2 - rect.left;
        const itemCenterY = itemRect.top + itemRect.height / 2 - rect.top;

        const distX = mouseX - itemCenterX;
        const distY = mouseY - itemCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const intensity = 1 - distance / maxDistance;
          const translateX = (distX / maxDistance) * intensity * -3;
          const translateY = (distY / maxDistance) * intensity * -3;

          gsap.to(htmlItem, {
            x: translateX,
            y: translateY,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });
    },
    [reduced]
  );

  const handleCardMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reduced) return;

      const target = e.target as HTMLElement;
      const card = target.closest("[data-stack-item]") as HTMLElement;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 4;
      const rotateX = ((centerY - y) / centerY) * 4;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 800,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });

      const glow = card.querySelector(".card-glow") as HTMLElement;
      if (glow) {
        gsap.to(glow, {
          x: x - rect.width / 2,
          y: y - rect.height / 2,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    },
    [reduced]
  );

  const handleCardMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (reduced) return;

      const target = e.target as HTMLElement;
      const card = target.closest("[data-stack-item]") as HTMLElement;
      if (!card) return;

      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });

      const glow = card.querySelector(".card-glow") as HTMLElement;
      if (glow) {
        gsap.to(glow, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    },
    [reduced]
  );

  useEffect(() => {
    if (reduced || !containerRef.current) return;

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mousemove", handleCardMouseMove);
    container.addEventListener("mouseleave", handleCardMouseLeave);

    const items = container.querySelectorAll("[data-stack-item]");
    items.forEach((item) => {
      (item as HTMLElement).addEventListener("mouseleave", handleCardMouseLeave as EventListener);
    });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mousemove", handleCardMouseMove);
      container.removeEventListener("mouseleave", handleCardMouseLeave);

      items.forEach((item) => {
        (item as HTMLElement).removeEventListener("mouseleave", handleCardMouseLeave as EventListener);
      });

      floatingAnimations.current.forEach((tween) => tween.kill());
      floatingAnimations.current = [];
    };
  }, [reduced, handleMouseMove, handleCardMouseMove, handleCardMouseLeave]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ perspective: "1000px" }}
    >
      {children}
    </div>
  );
}

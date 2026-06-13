"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, createTimer, stagger, utils } from "animejs";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

type JsTarget = Record<string, number>;

export function CreatureBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !containerRef.current) return;

    const el = containerRef.current;
    const rows = 9;
    const total = rows * rows;
    const grid: [number, number] = [rows, rows];
    const from = "center";
    const vpw = window.innerWidth * 0.5;
    const vph = window.innerHeight * 0.5;
    const cursor: JsTarget = { x: 0, y: 0 };

    const scaleStagger = stagger([2, 4], { ease: "inQuad", grid, from });
    const opacityStagger = stagger([0.1, 0.6], { grid, from });

    for (let i = 0; i < total; i++) {
      const div = document.createElement("div");
      div.style.width = "4em";
      div.style.height = "4em";
      div.style.margin = "3em";
      div.style.borderRadius = "2em";
      div.style.willChange = "transform";
      div.style.mixBlendMode = "plus-lighter";
      div.style.position = "relative";
      el.appendChild(div);
    }

    const particles = el.querySelectorAll("div");

    utils.set(el, {
      width: rows * 10 + "em",
      height: rows * 10 + "em",
    });

    utils.set(particles, {
      x: 0,
      y: 0,
      scale: scaleStagger,
      opacity: opacityStagger,
      background: stagger([60, 30], {
        grid,
        from,
        modifier: (v: number) => `hsl(348, 100%, ${v}%)`,
      }),
      boxShadow: stagger([4, 0.5], {
        grid,
        from,
        modifier: (v: number) =>
          `0px 0px ${utils.round(v, 0)}em 0px #FF0033`,
      }),
    });

    const pulse = () => {
      animate(particles, {
        keyframes: [
          {
            scale: 3.5,
            opacity: 0.8,
            delay: stagger(90, { start: 1650, grid, from }),
            duration: 200,
          },
          {
            scale: scaleStagger,
            opacity: opacityStagger,
            ease: "inOutQuad",
            duration: 600,
          },
        ],
      });
    };

    const mainLoop = createTimer({
      frameRate: 15,
      onUpdate: () => {
        animate(particles, {
          x: cursor.x,
          y: cursor.y,
          delay: stagger(50, { grid, from }),
          duration: stagger(150, {
            start: 800,
            ease: "inQuad",
            grid,
            from,
          }),
          ease: "inOut",
          composition: "blend",
        });
      },
    });

    const autoMove = createTimeline()
      .add(
        cursor as JsTarget,
        {
          x: [-vpw * 0.45, vpw * 0.45],
          modifier: (x: number) =>
            x + Math.sin(mainLoop.currentTime * 0.0007) * vpw * 0.5,
          duration: 4000,
          ease: "inOutExpo",
          alternate: true,
          loop: true,
          onBegin: pulse,
          onLoop: pulse,
        },
        0,
      )
      .add(
        cursor as JsTarget,
        {
          y: [-vph * 0.45, vph * 0.45],
          modifier: (y: number) =>
            y + Math.cos(mainLoop.currentTime * 0.00012) * vph * 0.5,
          duration: 1500,
          ease: "inOutQuad",
          alternate: true,
          loop: true,
        },
        0,
      );

    const idleTimer = createTimer({
      duration: 1500,
      onComplete: () => autoMove.play(),
    });

    const handlePointer = (e: MouseEvent | Touch) => {
      cursor.x = e.pageX - vpw;
      cursor.y = e.pageY - vph;
      autoMove.pause();
      idleTimer.restart();
    };

    const onMouseMove = (e: MouseEvent) => handlePointer(e);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handlePointer(e.touches[0]);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      mainLoop.pause();
      autoMove.pause();
      idleTimer.pause();
      el.innerHTML = "";
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap items-center justify-center"
      style={{
        fontSize: ".35vh",
        pointerEvents: "none",
      }}
    />
  );
}

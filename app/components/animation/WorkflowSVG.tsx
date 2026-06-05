"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, set } from "animejs";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

const workflowNodes = [
  { label: "INPUT", x: 30, y: 130, accent: true },
  { label: "PARSE", x: 180, y: 60 },
  { label: "ENRICH", x: 180, y: 200 },
  { label: "ROUTE", x: 360, y: 60 },
  { label: "FILTER", x: 360, y: 200 },
  { label: "OUTPUT", x: 510, y: 130, accent: true },
];

export function WorkflowSVG() {
  const svgRef = useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !svgRef.current) return;

    const paths = svgRef.current.querySelectorAll(".flow-path");
    const nodes = svgRef.current.querySelectorAll(".flow-node");
    const pulses = svgRef.current.querySelectorAll(".flow-pulse");

    paths.forEach((path) => {
      const length = (path as SVGPathElement).getTotalLength?.() ?? 200;
      set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    const tl = createTimeline({
      autoplay: true,
    });

    tl.add(paths, {
      strokeDashoffset: (el: SVGPathElement) => [el.getTotalLength(), 0],
      duration: 2000,
      easing: "cubicBezier(0.87, 0, 0.13, 1)",
      delay: 200,
    });

    tl.add(nodes, {
      scale: [0, 1],
      opacity: [0, 1],
      duration: 600,
      delay: 200,
      easing: "cubicBezier(0.34, 1.56, 0.64, 1)",
    });

    const pulseAnimations = Array.from(pulses).map((pulse, index) =>
      animate(pulse, {
        opacity: [0.8, 0],
        scale: [1, 2.5],
        duration: 1500,
        loop: true,
        easing: "easeOutExpo",
        delay: index * 350,
      })
    );

    return () => {
      tl.pause();
      pulseAnimations.forEach((animation) => animation.pause());
    };
  }, [reduced]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 600 300"
      className="w-full max-w-[600px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Diagrama de workflow automatizado"
      role="img"
    >
      {/* Connection paths */}
      <path
        className="flow-path"
        d="M60 150 C 120 150, 120 80, 180 80"
        stroke="rgba(255,0,51,0.4)"
        strokeWidth="2"
      />
      <path
        className="flow-path"
        d="M60 150 C 120 150, 120 220, 180 220"
        stroke="rgba(255,0,51,0.4)"
        strokeWidth="2"
      />
      <path
        className="flow-path"
        d="M240 80 C 300 80, 300 80, 360 80"
        stroke="rgba(255,0,51,0.4)"
        strokeWidth="2"
      />
      <path
        className="flow-path"
        d="M240 220 C 300 220, 300 220, 360 220"
        stroke="rgba(255,0,51,0.4)"
        strokeWidth="2"
      />
      <path
        className="flow-path"
        d="M420 80 C 480 80, 480 150, 540 150"
        stroke="rgba(255,0,51,0.4)"
        strokeWidth="2"
      />
      <path
        className="flow-path"
        d="M420 220 C 480 220, 480 150, 540 150"
        stroke="rgba(255,0,51,0.4)"
        strokeWidth="2"
      />

      {/* Nodes */}
      {workflowNodes.map((node) => (
        <g key={node.label} transform={`translate(${node.x}, ${node.y})`}>
          <g className="flow-node">
            <rect
              width="60"
              height="40"
              rx="8"
              fill="#161618"
              stroke={
                node.accent ? "rgba(255,0,51,0.5)" : "rgba(255,255,255,0.15)"
              }
              strokeWidth={node.accent ? "1.5" : "1"}
            />
            <text
              x="30"
              y="24"
              textAnchor="middle"
              fill={node.accent ? "#F0F0F2" : "#8A8A8F"}
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              {node.label}
            </text>
          </g>
        </g>
      ))}

      {/* Pulse dots */}
      <circle className="flow-pulse" cx="120" cy="115" r="3" fill="#FF0033" opacity="0" />
      <circle className="flow-pulse" cx="300" cy="80" r="3" fill="#FF0033" opacity="0" />
      <circle className="flow-pulse" cx="480" cy="115" r="3" fill="#FF0033" opacity="0" />
    </svg>
  );
}

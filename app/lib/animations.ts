export const EASINGS = {
  outExpo: "cubicBezier(0.16, 1, 0.3, 1)",
  outBack: "cubicBezier(0.34, 1.56, 0.64, 1)",
  inOutCirc: "cubicBezier(0.87, 0, 0.13, 1)",
  linear: "linear",
} as const;

export const DURATIONS = {
  fast: 300,
  normal: 600,
  slow: 1000,
  xslow: 2000,
} as const;

export const STAGGER = {
  tight: 30,
  normal: 80,
  loose: 150,
  section: 200,
} as const;

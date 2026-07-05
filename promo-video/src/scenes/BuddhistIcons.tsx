import React from "react";

export const Lotus: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <g stroke={color} strokeWidth={2.4} strokeLinejoin="round">
      <path d="M50 78 C34 78 22 66 20 50 C32 56 40 64 50 78 Z" />
      <path d="M50 78 C66 78 78 66 80 50 C68 56 60 64 50 78 Z" />
      <path d="M50 78 C38 70 32 56 34 40 C44 48 49 60 50 78 Z" />
      <path d="M50 78 C62 70 68 56 66 40 C56 48 51 60 50 78 Z" />
      <path d="M50 78 C44 62 45 46 50 30 C55 46 56 62 50 78 Z" />
    </g>
    <path
      d="M22 80 C22 68 34 60 50 60 C66 60 78 68 78 80"
      stroke={color}
      strokeWidth={2.4}
      strokeLinecap="round"
    />
  </svg>
);

export const DharmaWheel: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => {
  const spokes = 8;
  const cx = 50;
  const cy = 50;
  const rOuter = 40;
  const rInner = 10;
  const lines = Array.from({ length: spokes }).map((_, i) => {
    const angle = (Math.PI * 2 * i) / spokes;
    const x2 = cx + rOuter * 0.86 * Math.cos(angle);
    const y2 = cy + rOuter * 0.86 * Math.sin(angle);
    const x1 = cx + rInner * Math.cos(angle);
    const y1 = cy + rInner * Math.sin(angle);
    return { x1, y1, x2, y2 };
  });

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx={cx} cy={cy} r={rOuter} stroke={color} strokeWidth={3} />
      <circle cx={cx} cy={cy} r={rInner} stroke={color} strokeWidth={3} />
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke={color}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
};

export const PrayerBeads: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => {
  const count = 18;
  const cx = 50;
  const cy = 50;
  const r = 38;
  const beads = Array.from({ length: count }).map((_, i) => {
    const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  });

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke={color}
        strokeWidth={1.4}
        strokeDasharray="1 9"
        strokeLinecap="round"
      />
      {beads.map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r={4.4} fill={color} />
      ))}
    </svg>
  );
};

export const MeditatingFigure: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <g stroke={color} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="50" cy="24" r="9" />
      <path d="M50 15 C47 10 47 6 50 3" />
      <path d="M50 33 C35 33 30 46 30 54 C30 62 36 66 50 66 C64 66 70 62 70 54 C70 46 65 33 50 33 Z" />
      <path d="M30 54 C22 58 18 66 22 76 C34 84 44 84 50 78" />
      <path d="M70 54 C78 58 82 66 78 76 C66 84 56 84 50 78" />
      <path d="M22 76 C30 88 70 88 78 76" />
    </g>
  </svg>
);

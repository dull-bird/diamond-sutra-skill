import React from "react";

export const DiamondGem: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <g stroke={color} strokeWidth={2.6} strokeLinejoin="round" strokeLinecap="round">
      <path d="M22 34 L38 14 L62 14 L78 34 L50 86 Z" />
      <path d="M22 34 L78 34" />
      <path d="M38 14 L32 34 L50 86" />
      <path d="M62 14 L68 34 L50 86" />
      <path d="M32 34 L50 34 L68 34" />
      <path d="M38 14 L50 34 L62 14" />
    </g>
  </svg>
);

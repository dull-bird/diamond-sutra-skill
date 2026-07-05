import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

export const AnimatedLines: React.FC<{
  lines: string[];
  fontSize: number;
  color: string;
  fontFamily: string;
  fontWeight?: number;
  startFrame?: number;
  stagger?: number;
  textAlign?: "center" | "left";
}> = ({
  lines,
  fontSize,
  color,
  fontFamily,
  fontWeight = 700,
  startFrame = 0,
  stagger = 8,
  textAlign = "center",
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: textAlign === "center" ? "center" : "flex-start",
        gap: 6,
      }}
    >
      {lines.map((line, i) => {
        const localFrame = frame - startFrame - i * stagger;
        const opacity = interpolate(localFrame, [0, 22], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.45, 0, 0.55, 1),
        });
        const translateY = interpolate(localFrame, [0, 26], [24, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.45, 0, 0.55, 1),
        });

        return (
          <div
            key={i}
            style={{
              fontFamily,
              fontSize,
              fontWeight,
              color,
              lineHeight: 1.5,
              textAlign,
              opacity,
              translate: `0px ${translateY}px`,
            }}
          >
            {line}
          </div>
        );
      })}
    </div>
  );
};

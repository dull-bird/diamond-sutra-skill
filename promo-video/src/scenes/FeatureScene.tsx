import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Backdrop } from "./Backdrop";
import { colors } from "../theme";
import { sans, brush } from "../fonts";

export const FeatureScene: React.FC<{
  eyebrow: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ eyebrow, title, icon, children }) => {
  const frame = useCurrentFrame();

  const textOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textY = interpolate(frame, [0, 24], [26, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });

  const visualOpacity = interpolate(frame, [14, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={18} />
      <AbsoluteFill
        style={{
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 160,
          gap: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            opacity: textOpacity,
            translate: `0px ${textY}px`,
            padding: "0 90px",
          }}
        >
          {icon}
          <div
            style={{
              fontFamily: sans,
              fontSize: 38,
              fontWeight: 700,
              color: colors.gold,
              letterSpacing: 2,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontFamily: brush,
              fontSize: 82,
              fontWeight: 700,
              color: colors.ink,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ opacity: visualOpacity, width: "100%" }}>{children}</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

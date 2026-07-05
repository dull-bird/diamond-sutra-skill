import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Backdrop } from "./Backdrop";
import { DiamondGem } from "./DiamondGem";
import { colors } from "../theme";
import { sans, brush } from "../fonts";

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const sealOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sealScale = interpolate(frame, [0, 24], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.2, 0.64, 1),
  });

  const fadeIn = (start: number) =>
    interpolate(frame, [start, start + 20], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={35} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 26,
        }}
      >
        <div style={{ opacity: sealOpacity, scale: sealScale }}>
          <DiamondGem size={112} color={colors.gold} />
        </div>
        <div
          style={{
            fontFamily: brush,
            fontSize: 78,
            fontWeight: 700,
            color: colors.ink,
            opacity: fadeIn(16),
          }}
        >
          金刚经·Skill
        </div>
        <div
          style={{
            fontFamily: sans,
            fontSize: 46,
            fontWeight: 500,
            color: colors.muted,
            opacity: fadeIn(28),
          }}
        >
应无所住，而生其心
        </div>

        <div
          style={{
            marginTop: 36,
            padding: "22px 44px",
            borderRadius: 18,
            background: colors.gold,
            fontFamily: sans,
            fontSize: 40,
            fontWeight: 700,
            color: "#fff",
            opacity: fadeIn(44),
          }}
        >
          GitHub: dull-bird/diamond-sutra-skill
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

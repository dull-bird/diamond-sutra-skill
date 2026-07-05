import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Backdrop } from "../Backdrop";
import { DiamondGem } from "../DiamondGem";
import { colors } from "../../theme";
import { sans, serif } from "../../fonts";

export const CTAEN: React.FC = () => {
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
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", gap: 28, padding: "0 80px" }}>
        <div style={{ opacity: sealOpacity, scale: sealScale }}>
          <DiamondGem size={112} color={colors.gold} />
        </div>
        <div style={{ fontFamily: serif, fontSize: 72, fontWeight: 700, color: colors.ink, opacity: fadeIn(16) }}>
          Diamond Sutra · Skill
        </div>
        <div
          style={{
            fontFamily: serif,
            fontSize: 42,
            fontWeight: 400,
            fontStyle: "italic",
            color: colors.muted,
            textAlign: "center",
            lineHeight: 1.4,
            opacity: fadeIn(28),
          }}
        >
          "Let the mind arise,
          <br />
          without dwelling on anything."
        </div>
        <div
          style={{
            marginTop: 34,
            padding: "22px 44px",
            borderRadius: 18,
            background: colors.gold,
            fontFamily: sans,
            fontSize: 38,
            fontWeight: 700,
            color: "#fff",
            opacity: fadeIn(46),
          }}
        >
          github.com/dull-bird/diamond-sutra-skill
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

import React from "react";
import { AbsoluteFill, Easing, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { Audio } from "@remotion/media";
import { Backdrop } from "./Backdrop";
import { AnimatedLines } from "../AnimatedLines";
import { DiamondGem } from "./DiamondGem";
import { colors } from "../theme";
import { brush, sans } from "../fonts";

export const Reveal: React.FC = () => {
  const frame = useCurrentFrame();

  const iconOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const iconScale = interpolate(frame, [0, 24], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.2, 0.64, 1),
  });

  const titleOpacity = interpolate(frame, [16, 34], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [16, 34], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });

  const tagOpacity = interpolate(frame, [30, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={26} />
      <Sequence from={25}>
        <Audio src={staticFile("voiceover/reveal.mp3")} />
      </Sequence>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 22,
          padding: "0 90px",
        }}
      >
        <div style={{ opacity: iconOpacity, scale: iconScale }}>
          <DiamondGem size={124} color={colors.gold} />
        </div>
        <div
          style={{
            fontFamily: brush,
            fontSize: 96,
            fontWeight: 700,
            color: colors.ink,
            opacity: titleOpacity,
            translate: `0px ${titleY}px`,
          }}
        >
          金刚经·Skill
        </div>
        <div
          style={{
            fontFamily: sans,
            fontSize: 38,
            fontWeight: 700,
            color: colors.gold,
            letterSpacing: 3,
            opacity: tagOpacity,
          }}
        >
          AI AGENT SKILL
        </div>
        <div style={{ height: 30 }} />
        <AnimatedLines
          lines={["南怀瑾的智慧 · 费勇的现代解读"]}
          fontSize={46}
          color={colors.muted}
          fontFamily={sans}
          fontWeight={500}
          startFrame={85}
        />
        <AnimatedLines
          lines={["装进你的 AI", "陪你把心里的结，一句一句解开"]}
          fontSize={56}
          color={colors.ink}
          fontFamily={brush}
          fontWeight={500}
          startFrame={156}
          stagger={16}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

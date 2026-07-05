import React from "react";
import { AbsoluteFill, Easing, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { Audio } from "@remotion/media";
import { Backdrop } from "../Backdrop";
import { AnimatedLines } from "../../AnimatedLines";
import { DiamondGem } from "../DiamondGem";
import { colors } from "../../theme";
import { serif, sans } from "../../fonts";

export const RevealEN: React.FC = () => {
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
  const tagOpacity = interpolate(frame, [30, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={26} />
      <Sequence from={25}>
        <Audio src={staticFile("voiceover/en/reveal.mp3")} />
      </Sequence>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 22,
          padding: "0 80px",
        }}
      >
        <div style={{ opacity: iconOpacity, scale: iconScale }}>
          <DiamondGem size={124} color={colors.gold} />
        </div>
        <div
          style={{
            fontFamily: serif,
            fontSize: 84,
            fontWeight: 700,
            color: colors.ink,
            opacity: titleOpacity,
          }}
        >
          Diamond Sutra · Skill
        </div>
        <div
          style={{
            fontFamily: sans,
            fontSize: 32,
            fontWeight: 700,
            color: colors.gold,
            letterSpacing: 4,
            opacity: tagOpacity,
          }}
        >
          AI AGENT SKILL
        </div>
        <div style={{ height: 28 }} />
        <AnimatedLines
          lines={["Nan Huai-Jin's wisdom · a modern reading"]}
          fontSize={38}
          color={colors.muted}
          fontFamily={sans}
          fontWeight={500}
          startFrame={85}
          textAlign="center"
        />
        <AnimatedLines
          lines={["Installed into your AI —", "to talk your worries loose, one line at a time."]}
          fontSize={46}
          color={colors.ink}
          fontFamily={serif}
          fontWeight={500}
          startFrame={224}
          stagger={16}
          textAlign="center"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

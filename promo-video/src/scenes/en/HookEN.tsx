import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { Backdrop } from "../Backdrop";
import { AnimatedLines } from "../../AnimatedLines";
import { colors } from "../../theme";
import { serif } from "../../fonts";

export const HookEN: React.FC = () => {
  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={35} />
      <Sequence from={12}>
        <Audio src={staticFile("voiceover/en/hook.mp3")} />
      </Sequence>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "0 90px",
          gap: 56,
        }}
      >
        <AnimatedLines
          lines={["We keep regretting yesterday,", "dreading tomorrow,", "and never really living now."]}
          fontSize={72}
          color={colors.ink}
          fontFamily={serif}
          fontWeight={500}
          startFrame={12}
          stagger={40}
          textAlign="center"
        />
        <AnimatedLines
          lines={["But a line written 1,000 years ago", "already saw through it."]}
          fontSize={48}
          color={colors.gold}
          fontFamily={serif}
          fontWeight={500}
          startFrame={155}
          stagger={18}
          textAlign="center"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

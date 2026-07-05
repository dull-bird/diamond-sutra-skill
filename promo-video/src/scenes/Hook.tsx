import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { Backdrop } from "./Backdrop";
import { AnimatedLines } from "../AnimatedLines";
import { colors } from "../theme";
import { brush } from "../fonts";

export const Hook: React.FC = () => {
  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={35} />
      <Sequence from={12}>
        <Audio src={staticFile("voiceover/hook.mp3")} />
      </Sequence>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "0 80px",
          gap: 60,
        }}
      >
        <AnimatedLines
          lines={["我们总在后悔昨天", "又焦虑明天", "唯独此刻，从没好好活过"]}
          fontSize={80}
          color={colors.ink}
          fontFamily={brush}
          fontWeight={500}
          startFrame={12}
          stagger={52}
        />
        <AnimatedLines
          lines={["可一千多年前", "有一句话，就说透了"]}
          fontSize={56}
          color={colors.gold}
          fontFamily={brush}
          fontWeight={500}
          startFrame={179}
          stagger={20}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

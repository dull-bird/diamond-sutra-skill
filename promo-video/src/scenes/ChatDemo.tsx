import React from "react";
import { AbsoluteFill, Easing, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Audio } from "@remotion/media";
import { Backdrop } from "./Backdrop";
import { colors } from "../theme";
import { sans, brush } from "../fonts";

const Bubble: React.FC<{
  from: "user" | "ai";
  children: React.ReactNode;
  appear: number;
  frame: number;
}> = ({ from, children, appear, frame }) => {
  const isUser = from === "user";
  const op = interpolate(frame, [appear, appear + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });
  const y = interpolate(frame, [appear, appear + 18], [26, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        width: "100%",
        opacity: op,
        translate: `0px ${y}px`,
      }}
    >
      <div
        style={{
          maxWidth: 860,
          padding: "34px 46px",
          borderRadius: 36,
          background: isUser ? colors.gold : colors.card,
          border: isUser ? "none" : `1px solid ${colors.border}`,
          color: isUser ? "#fff" : colors.ink,
          fontFamily: isUser ? sans : brush,
          fontSize: isUser ? 48 : 56,
          fontWeight: isUser ? 500 : 400,
          lineHeight: 1.55,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const ChatDemo: React.FC = () => {
  const frame = useCurrentFrame();

  const groupOpacity = (fadeOutAt?: number) =>
    fadeOutAt === undefined
      ? 1
      : interpolate(frame, [fadeOutAt, fadeOutAt + 14], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

  const ex1On = frame < 303;
  const ex2On = frame >= 287;

  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={30} />
      <Sequence from={30}>
        <Audio src={staticFile("voiceover/chat.mp3")} />
      </Sequence>

      {/* exchange 1 */}
      {ex1On && (
        <AbsoluteFill
          style={{
            flexDirection: "column",
            justifyContent: "center",
            gap: 34,
            padding: "0 70px",
            opacity: groupOpacity(291),
          }}
        >
          <Bubble from="user" appear={6} frame={frame}>
            /diamond-sutra　什么是空性？
          </Bubble>
          <Bubble from="ai" appear={30} frame={frame}>
            空性，不是什么都没有。像水，遇冷成冰、遇热成气，没有一个固定不变的本质——这叫「性空」。
          </Bubble>
        </AbsoluteFill>
      )}

      {/* exchange 2 */}
      {ex2On && (
        <AbsoluteFill
          style={{
            flexDirection: "column",
            justifyContent: "center",
            gap: 34,
            padding: "0 70px",
          }}
        >
          <Bubble from="user" appear={295} frame={frame}>
            那，我老放不下过去呢？
          </Bubble>
          <Bubble from="ai" appear={313} frame={frame}>
            你那颗心，就像流水，昨天的水早流走了，抓不住。「过去心不可得，现在心不可得，未来心不可得。」
          </Bubble>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

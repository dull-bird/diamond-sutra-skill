import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Backdrop } from "./Backdrop";
import { PrayerBeads } from "./BuddhistIcons";
import { colors } from "../theme";
import { sans, brush } from "../fonts";

export const DemoQuestion: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });
  const y = interpolate(frame, [0, 26], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });

  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={40} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "0 110px",
          gap: 30,
        }}
      >
        <div style={{ opacity }}>
          <PrayerBeads size={72} color={colors.gold} />
        </div>
        <div
          style={{
            fontFamily: sans,
            fontSize: 30,
            fontWeight: 700,
            color: colors.muted,
            letterSpacing: 2,
            opacity,
          }}
        >
          有人问
        </div>
        <div
          style={{
            fontFamily: brush,
            fontSize: 68,
            fontWeight: 400,
            color: colors.ink,
            textAlign: "center",
            lineHeight: 1.5,
            opacity,
            translate: `0px ${y}px`,
          }}
        >
          我最近很迷茫焦虑，
          <br />
          感觉自己像个废物，
          <br />
          不知道怎么找回自己？
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

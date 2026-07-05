import React from "react";
import { AbsoluteFill, Easing, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Audio } from "@remotion/media";
import { Backdrop } from "./Backdrop";
import { DharmaWheel } from "./BuddhistIcons";
import { colors } from "../theme";
import { sans, brush } from "../fonts";

export const CoreTeaching: React.FC = () => {
  const frame = useCurrentFrame();

  const fade = (start: number, dur = 18) =>
    interpolate(frame, [start, start + dur], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.45, 0, 0.55, 1),
    });
  const rise = (start: number) =>
    interpolate(frame, [start, start + 20], [24, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.45, 0, 0.55, 1),
    });

  const wheelScale = interpolate(frame, [0, 24], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.2, 0.64, 1),
  });

  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={30} />
      <Sequence from={15}>
        <Audio src={staticFile("voiceover/wusuozhu.mp3")} />
      </Sequence>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 34,
          padding: "0 80px",
        }}
      >
        <div style={{ opacity: fade(0), scale: wheelScale }}>
          <DharmaWheel size={96} color={colors.gold} />
        </div>
        <div
          style={{
            fontFamily: sans,
            fontSize: 34,
            fontWeight: 700,
            color: colors.muted,
            letterSpacing: 4,
            opacity: fade(6),
          }}
        >
          全经的眼目
        </div>

        {/* the core line */}
        <div
          style={{
            fontFamily: brush,
            fontSize: 82,
            fontWeight: 700,
            color: colors.gold,
            textAlign: "center",
            lineHeight: 1.4,
            opacity: fade(20),
            translate: `0px ${rise(20)}px`,
          }}
        >
          应无所住
          <br />
          而生其心
        </div>

        <div style={{ height: 12 }} />

        {/* plain-language gloss — appears with w2 (~frame 148) */}
        <div
          style={{
            fontFamily: brush,
            fontSize: 46,
            fontWeight: 400,
            color: colors.ink,
            textAlign: "center",
            lineHeight: 1.5,
            opacity: fade(148),
            translate: `0px ${rise(148)}px`,
          }}
        >
          不把心黏在得失、名利、过去未来上，
          <br />
          却依然活泼泼地，把日子过好。
        </div>

        {/* Huineng note — appears with w3 (~frame 329) */}
        <div
          style={{
            fontFamily: sans,
            fontSize: 32,
            fontWeight: 500,
            color: colors.muted,
            textAlign: "center",
            opacity: fade(329),
          }}
        >
          六祖惠能，就因这一句而开悟
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

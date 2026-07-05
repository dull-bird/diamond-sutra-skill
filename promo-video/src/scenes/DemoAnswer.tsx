import React from "react";
import { AbsoluteFill, Easing, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Audio } from "@remotion/media";
import { Backdrop } from "./Backdrop";
import { MeditatingFigure } from "./BuddhistIcons";
import { colors } from "../theme";
import { sans, brush } from "../fonts";

// Per-segment audio concatenated (0.25s gaps); `start` = exact cumulative frame
// offset. Subtitles show one at a time, cross-fading with the voice.
type Seg = { text: string; start: number; kind: "ask" | "say" | "sutra" };
const segments: Seg[] = [
  { text: "有人问：", start: 20, kind: "ask" },
  { text: "我放不下过去，\n又怕来不及的将来，怎么办？", start: 46, kind: "ask" },
  { text: "你那颗心，就像流水。", start: 149, kind: "say" },
  { text: "昨天的水，早流走了，抓不住；", start: 211, kind: "say" },
  { text: "明天的水，还没来，也抓不住。", start: 298, kind: "say" },
  { text: "《金刚经》里有一句顶尖的话——", start: 379, kind: "say" },
  {
    text: "「过去心不可得，\n现在心不可得，\n未来心不可得。」",
    start: 455,
    kind: "sutra",
  },
  { text: "你一遍遍去想，\n是拿虚妄的念头，割自己。", start: 588, kind: "say" },
  { text: "别硬压它，\n就静静看着烦恼升起来，又落下去。", start: 703, kind: "say" },
];

const LAST_END = 900;

export const DemoAnswer: React.FC = () => {
  const frame = useCurrentFrame();

  const headerOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={30} />
      <Sequence from={20}>
        <Audio src={staticFile("voiceover/demo.mp3")} />
      </Sequence>

      {/* header */}
      <AbsoluteFill
        style={{
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 150,
          gap: 18,
        }}
      >
        <div style={{ opacity: headerOpacity }}>
          <MeditatingFigure size={86} color={colors.gold} />
        </div>
        <div
          style={{
            fontFamily: sans,
            fontSize: 34,
            fontWeight: 700,
            color: colors.muted,
            letterSpacing: 2,
            opacity: headerOpacity,
          }}
        >
          法师说
        </div>
      </AbsoluteFill>

      {/* one subtitle at a time, centered */}
      {segments.map((seg, i) => {
        const next = i < segments.length - 1 ? segments[i + 1].start : LAST_END;
        const fadeIn = interpolate(frame, [seg.start, seg.start + 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.45, 0, 0.55, 1),
        });
        const fadeOut =
          i < segments.length - 1
            ? interpolate(frame, [next - 12, next], [1, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.45, 0, 0.55, 1),
              })
            : 1;
        const opacity = Math.min(fadeIn, fadeOut);
        if (opacity <= 0.001) return null;

        const rise = interpolate(frame, [seg.start, seg.start + 18], [24, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.45, 0, 0.55, 1),
        });

        const isSutra = seg.kind === "sutra";
        const isAsk = seg.kind === "ask";

        return (
          <AbsoluteFill
            key={i}
            style={{ justifyContent: "center", alignItems: "center", padding: "0 90px" }}
          >
            <div
              style={{
                fontFamily: brush,
                fontSize: isSutra ? 68 : isAsk ? 52 : 62,
                fontWeight: isSutra ? 700 : 400,
                color: isAsk ? colors.muted : isSutra ? colors.gold : colors.ink,
                textAlign: "center",
                lineHeight: 1.55,
                whiteSpace: "pre-line",
                opacity,
                translate: `0px ${rise}px`,
              }}
            >
              {seg.text}
            </div>
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};

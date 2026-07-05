import React from "react";
import { AbsoluteFill, interpolate, Sequence, staticFile, useVideoConfig } from "remotion";
import { Audio } from "@remotion/media";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { Hook } from "./scenes/Hook";
import { Reveal } from "./scenes/Reveal";
import { ChatDemo } from "./scenes/ChatDemo";
import { FeatureScene } from "./scenes/FeatureScene";
import { LayerCards } from "./scenes/LayerCards";
import { TriggerCards } from "./scenes/TriggerCards";
import { TerminalCard } from "./scenes/TerminalCard";
import { CTA } from "./scenes/CTA";
import { PrayerBeads, Lotus } from "./scenes/BuddhistIcons";
import { colors } from "./theme";

const T = 15;
const transition = () => (
  <TransitionSeries.Transition
    presentation={fade()}
    timing={linearTiming({ durationInFrames: T })}
  />
);

export const MyComposition: React.FC = () => {
  const { durationInFrames, fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: colors.bg }}>
      <Audio
        src={staticFile("audio/bgm.mp3")}
        trimAfter={durationInFrames}
        volume={(f) =>
          interpolate(
            f,
            [0, fps, durationInFrames - fps, durationInFrames],
            [0, 0.22, 0.22, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          )
        }
      />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={340}>
          <Hook />
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={350}>
          <Reveal />
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={270}>
          <AbsoluteFill>
            <Sequence from={15}>
              <Audio src={staticFile("voiceover/trigger.mp3")} />
            </Sequence>
            <FeatureScene
              eyebrow="怎么用"
              title="两种唤醒方式"
              icon={<Lotus size={72} color={colors.gold} />}
            >
              <TriggerCards />
            </FeatureScene>
          </AbsoluteFill>
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={620}>
          <ChatDemo />
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={560}>
          <AbsoluteFill>
            <Sequence from={15}>
              <Audio src={staticFile("voiceover/layers.mp3")} />
            </Sequence>
            <FeatureScene
              eyebrow="双层架构"
              title="从两本书蒸馏而成"
              icon={<PrayerBeads size={70} color={colors.gold} />}
            >
              <LayerCards />
            </FeatureScene>
          </AbsoluteFill>
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={240}>
          <AbsoluteFill>
            <Sequence from={15}>
              <Audio src={staticFile("voiceover/install.mp3")} />
            </Sequence>
            <FeatureScene eyebrow="一行命令" title="装进你的 Agent">
              <TerminalCard
                width={880}
                lines={[
                  {
                    type: "cmd",
                    text: "npx skills add dull-bird/diamond-sutra-skill",
                  },
                  { type: "output", text: "✓ 已装入 Claude Code skills" },
                ]}
              />
            </FeatureScene>
          </AbsoluteFill>
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={220}>
          <AbsoluteFill>
            <Sequence from={60}>
              <Audio src={staticFile("voiceover/cta.mp3")} />
            </Sequence>
            <CTA />
          </AbsoluteFill>
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

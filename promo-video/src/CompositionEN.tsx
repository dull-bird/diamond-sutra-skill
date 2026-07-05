import React from "react";
import { AbsoluteFill, interpolate, Sequence, staticFile, useVideoConfig } from "remotion";
import { Audio } from "@remotion/media";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { HookEN } from "./scenes/en/HookEN";
import { RevealEN } from "./scenes/en/RevealEN";
import { ChatDemoEN } from "./scenes/en/ChatDemoEN";
import { TriggerCardsEN } from "./scenes/en/TriggerCardsEN";
import { LayerCardsEN } from "./scenes/en/LayerCardsEN";
import { CTAEN } from "./scenes/en/CTAEN";
import { FeatureScene } from "./scenes/FeatureScene";
import { TerminalCard } from "./scenes/TerminalCard";
import { PrayerBeads, Lotus } from "./scenes/BuddhistIcons";
import { colors } from "./theme";

const T = 15;
const transition = () => (
  <TransitionSeries.Transition
    presentation={fade()}
    timing={linearTiming({ durationInFrames: T })}
  />
);

export const MyCompositionEN: React.FC = () => {
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
        <TransitionSeries.Sequence durationInFrames={360}>
          <HookEN />
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={450}>
          <RevealEN />
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={250}>
          <AbsoluteFill>
            <Sequence from={15}>
              <Audio src={staticFile("voiceover/en/trigger.mp3")} />
            </Sequence>
            <FeatureScene
              eyebrow="HOW TO USE"
              title="Two ways to wake it"
              icon={<Lotus size={72} color={colors.gold} />}
            >
              <TriggerCardsEN />
            </FeatureScene>
          </AbsoluteFill>
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={900}>
          <ChatDemoEN />
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={470}>
          <AbsoluteFill>
            <Sequence from={15}>
              <Audio src={staticFile("voiceover/en/layers.mp3")} />
            </Sequence>
            <FeatureScene
              eyebrow="TWO LAYERS"
              title="Distilled from two books"
              icon={<PrayerBeads size={70} color={colors.gold} />}
            >
              <LayerCardsEN />
            </FeatureScene>
          </AbsoluteFill>
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={250}>
          <AbsoluteFill>
            <Sequence from={15}>
              <Audio src={staticFile("voiceover/en/install.mp3")} />
            </Sequence>
            <FeatureScene eyebrow="ONE COMMAND" title="Into your Agent">
              <TerminalCard
                width={900}
                lines={[
                  { type: "cmd", text: "npx skills add dull-bird/diamond-sutra-skill" },
                  { type: "output", text: "✓ Installed to Claude Code skills" },
                ]}
              />
            </FeatureScene>
          </AbsoluteFill>
        </TransitionSeries.Sequence>
        {transition()}

        <TransitionSeries.Sequence durationInFrames={200}>
          <AbsoluteFill>
            <Sequence from={40}>
              <Audio src={staticFile("voiceover/en/cta.mp3")} />
            </Sequence>
            <CTAEN />
          </AbsoluteFill>
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

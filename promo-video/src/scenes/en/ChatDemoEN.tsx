import React from "react";
import { AbsoluteFill, Easing, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Audio } from "@remotion/media";
import { Backdrop } from "../Backdrop";
import { colors } from "../../theme";
import { sans, serif } from "../../fonts";

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
          maxWidth: 900,
          padding: "34px 44px",
          borderRadius: 36,
          background: isUser ? colors.gold : colors.card,
          border: isUser ? "none" : `1px solid ${colors.border}`,
          color: isUser ? "#fff" : colors.ink,
          fontFamily: isUser ? sans : serif,
          fontSize: isUser ? 44 : 44,
          fontWeight: isUser ? 500 : 400,
          lineHeight: 1.5,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const ChatDemoEN: React.FC = () => {
  const frame = useCurrentFrame();

  const ex1On = frame < 396;
  const ex2On = frame >= 380;

  const groupOpacity = (fadeOutAt: number) =>
    interpolate(frame, [fadeOutAt, fadeOutAt + 14], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  return (
    <AbsoluteFill>
      <Backdrop color={colors.gold} x={50} y={30} />
      <Sequence from={30}>
        <Audio src={staticFile("voiceover/en/chat.mp3")} />
      </Sequence>

      {ex1On && (
        <AbsoluteFill
          style={{
            flexDirection: "column",
            justifyContent: "center",
            gap: 34,
            padding: "0 70px",
            opacity: groupOpacity(384),
          }}
        >
          <Bubble from="user" appear={6} frame={frame}>
            /diamond-sutra　What is emptiness?
          </Bubble>
          <Bubble from="ai" appear={30} frame={frame}>
            Emptiness isn't nothingness. It's like water — ice when it's cold,
            vapor when it's warm — with no fixed, unchanging essence. That's what
            "emptiness" means.
          </Bubble>
        </AbsoluteFill>
      )}

      {ex2On && (
        <AbsoluteFill
          style={{
            flexDirection: "column",
            justifyContent: "center",
            gap: 34,
            padding: "0 70px",
          }}
        >
          <Bubble from="user" appear={388} frame={frame}>
            And I can't let go of the past?
          </Bubble>
          <Bubble from="ai" appear={406} frame={frame}>
            Your mind is like flowing water — yesterday's water is long gone, you
            can't grasp it. "The past mind cannot be grasped, the present mind
            cannot be grasped, the future mind cannot be grasped."
          </Bubble>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

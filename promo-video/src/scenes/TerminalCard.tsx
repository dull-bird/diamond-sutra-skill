import React from "react";
import { useCurrentFrame } from "remotion";
import { colors } from "../theme";

type Line = { type: "cmd" | "output"; text: string };

const CHARS_PER_FRAME = 0.6;
const GAP_AFTER_CMD = 10;
const GAP_AFTER_OUTPUT = 22;

export const TerminalCard: React.FC<{ lines: Line[]; width: number }> = ({
  lines,
  width,
}) => {
  const frame = useCurrentFrame();

  let cursor = 6;
  const rendered: { line: Line; visibleChars: number; started: boolean }[] = [];

  for (const line of lines) {
    const startFrame = cursor;
    if (line.type === "cmd") {
      const typingFrames = line.text.length / CHARS_PER_FRAME;
      const elapsed = frame - startFrame;
      const visibleChars = Math.max(
        0,
        Math.min(line.text.length, Math.floor(elapsed * CHARS_PER_FRAME)),
      );
      rendered.push({ line, visibleChars, started: frame >= startFrame });
      cursor = startFrame + typingFrames + GAP_AFTER_CMD;
    } else {
      rendered.push({
        line,
        visibleChars: frame >= startFrame ? line.text.length : 0,
        started: frame >= startFrame,
      });
      cursor = startFrame + GAP_AFTER_OUTPUT;
    }
  }

  return (
    <div
      style={{
        width,
        margin: "0 auto",
        borderRadius: 20,
        overflow: "hidden",
        background: "#241f18",
        border: `1px solid ${colors.border}`,
        boxShadow: "0 30px 60px rgba(80,60,20,0.18)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "16px 20px",
          borderBottom: "1px solid #3a3222",
        }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 7, background: "#ff5f56" }} />
        <div style={{ width: 14, height: 14, borderRadius: 7, background: "#ffbd2e" }} />
        <div style={{ width: 14, height: 14, borderRadius: 7, background: "#27c93f" }} />
      </div>
      <div
        style={{
          padding: "32px 36px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          minHeight: 160,
        }}
      >
        {rendered.map((r, i) => {
          if (!r.started) return null;
          const text = r.line.text.slice(0, r.visibleChars);
          const isCmd = r.line.type === "cmd";
          return (
            <div
              key={i}
              style={{
                fontFamily: "monospace",
                fontSize: 27,
                color: isCmd ? "#f5efe2" : "#8fd88f",
                whiteSpace: "pre",
              }}
            >
              {isCmd ? `$ ${text}` : text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

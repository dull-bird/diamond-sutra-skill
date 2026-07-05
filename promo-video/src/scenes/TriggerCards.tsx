import React from "react";
import { colors } from "../theme";
import { sans, brush } from "../fonts";

const items = [
  { tag: "显式唤醒", desc: "输入 /diamond-sutra 直接开解" },
  { tag: "智能触发", desc: "聊天里随口一句「压力好大」也会自己接上话" },
];

export const TriggerCards: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 40,
        padding: "0 70px",
      }}
    >
      {items.map((it) => (
        <div
          key={it.tag}
          style={{
            borderRadius: 28,
            background: colors.card,
            border: `1px solid ${colors.border}`,
            boxShadow: "0 30px 56px rgba(80,60,20,0.12)",
            padding: "46px 52px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontFamily: brush,
              fontSize: 54,
              fontWeight: 700,
              color: colors.gold,
            }}
          >
            {it.tag}
          </div>
          <div
            style={{
              fontFamily: sans,
              fontSize: 42,
              fontWeight: 500,
              color: colors.ink,
              lineHeight: 1.4,
            }}
          >
            {it.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import { colors } from "../../theme";
import { sans, serif } from "../../fonts";

const items = [
  { tag: "Explicit", desc: "Type  /diamond-sutra  to open a session" },
  { tag: "Automatic", desc: 'Or just vent — "I\'m so stressed" — and it joins in' },
];

export const TriggerCardsEN: React.FC = () => {
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
            padding: "44px 52px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ fontFamily: serif, fontSize: 50, fontWeight: 700, color: colors.gold }}>
            {it.tag}
          </div>
          <div
            style={{
              fontFamily: sans,
              fontSize: 38,
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

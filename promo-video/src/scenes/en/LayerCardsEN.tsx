import React from "react";
import { Img, staticFile } from "remotion";
import { colors } from "../../theme";
import { sans, serif } from "../../fonts";

const layers = [
  {
    tag: "Doctrine",
    author: "Nan Huai-Jin",
    title: "What the Diamond Sutra Says",
    desc: "Faithful to the original text",
    cover: "images/book-nan.webp",
  },
  {
    tag: "Voice",
    author: "Fei Yong",
    title: "A Practice for the Anxious Mind",
    desc: "Ancient wisdom in everyday metaphors",
    cover: "images/book-fei.png",
  },
];

export const LayerCardsEN: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 44, padding: "0 70px" }}>
      {layers.map((l) => (
        <div
          key={l.tag}
          style={{
            borderRadius: 28,
            background: colors.card,
            border: `1px solid ${colors.border}`,
            boxShadow: "0 30px 56px rgba(80,60,20,0.12)",
            padding: "40px 48px",
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          <Img
            src={staticFile(l.cover)}
            style={{
              flexShrink: 0,
              width: 128,
              height: 182,
              borderRadius: 10,
              objectFit: "cover",
              boxShadow: "0 12px 22px rgba(80,60,20,0.24)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontFamily: sans, fontSize: 28, fontWeight: 700, color: colors.gold, letterSpacing: 1 }}>
              {l.tag}
            </div>
            <div style={{ fontFamily: serif, fontSize: 46, fontWeight: 700, color: colors.ink }}>
              {l.author}
            </div>
            <div style={{ fontFamily: serif, fontSize: 32, fontWeight: 400, color: colors.muted, fontStyle: "italic" }}>
              {l.title}
            </div>
            <div style={{ fontFamily: sans, fontSize: 28, fontWeight: 400, color: colors.muted, lineHeight: 1.4 }}>
              {l.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

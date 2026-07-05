import React from "react";
import { Img, staticFile } from "remotion";
import { colors } from "../theme";
import { sans, brush } from "../fonts";

const layers = [
  {
    tag: "义理体系",
    author: "南怀瑾",
    title: "《金刚经说什么》",
    desc: "原文释义，绝不歪曲经义",
    cover: "images/book-nan.webp",
  },
  {
    tag: "说法角色",
    author: "费勇",
    title: "《金刚经修心课》",
    desc: "现代比喻：过河拆桥．社会标签．皇帝的新衣",
    cover: "images/book-fei.png",
  },
];

export const LayerCards: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 44,
        padding: "0 70px",
      }}
    >
      {layers.map((l) => (
        <div
          key={l.tag}
          style={{
            borderRadius: 28,
            background: colors.card,
            border: `1px solid ${colors.border}`,
            boxShadow: "0 30px 56px rgba(80,60,20,0.12)",
            padding: "44px 52px",
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
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontFamily: sans,
                fontSize: 30,
                fontWeight: 700,
                color: colors.gold,
                letterSpacing: 1,
              }}
            >
              {l.tag}
            </div>
            <div
              style={{
                fontFamily: brush,
                fontSize: 50,
                fontWeight: 700,
                color: colors.ink,
              }}
            >
              {l.author}
              <span style={{ fontSize: 36, fontWeight: 400, color: colors.muted }}>
                {" "}
                {l.title}
              </span>
            </div>
            <div
              style={{
                fontFamily: sans,
                fontSize: 30,
                fontWeight: 400,
                color: colors.muted,
                lineHeight: 1.4,
              }}
            >
              {l.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

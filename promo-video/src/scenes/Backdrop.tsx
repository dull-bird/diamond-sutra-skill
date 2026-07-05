import React from "react";
import { colors } from "../theme";

export const Backdrop: React.FC<{ color?: string; x?: number; y?: number }> = ({
  color = colors.gold,
  x = 50,
  y = 30,
}) => {
  return (
    <div style={{ position: "absolute", inset: 0, background: colors.bg }}>
      <div
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          width: 1100,
          height: 1100,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${color}18 0%, ${color}00 70%)`,
        }}
      />
    </div>
  );
};

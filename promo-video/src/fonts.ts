import { loadFont as loadNotoSerifSC } from "@remotion/google-fonts/NotoSerifSC";
import { loadFont as loadNotoSansSC } from "@remotion/google-fonts/NotoSansSC";

const serifFont = loadNotoSerifSC("normal", {
  weights: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

// Serif (宋体) used for titles, scripture quotes, and dialogue — has clear 衬线.
export const serif = serifFont.fontFamily;
// `brush` kept as an alias so existing scene imports don't break; now also serif.
export const brush = serifFont.fontFamily;

export const { fontFamily: sans } = loadNotoSansSC("normal", {
  weights: ["400", "500", "700"],
  subsets: ["latin"],
});

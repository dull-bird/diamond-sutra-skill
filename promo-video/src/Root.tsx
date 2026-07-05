import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { MyCompositionEN } from "./CompositionEN";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DiamondSutraPromo"
        component={MyComposition}
        durationInFrames={2510}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="DiamondSutraPromoEN"
        component={MyCompositionEN}
        durationInFrames={2790}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};

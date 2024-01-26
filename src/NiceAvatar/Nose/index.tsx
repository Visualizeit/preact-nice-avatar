import NoseLong from "./NoseLong";
import NoseShort from "./NoseShort";
import NoseRound from "./NoseRound";

interface NoseProps {
  style: "long" | "round" | "short";
}

const Nose = ({ style }: NoseProps) => {
  switch (style) {
    case "long":
      return <NoseLong />;
    case "round":
      return <NoseRound />;
    case "short":
    default:
      return <NoseShort />;
  }
};

export default Nose;

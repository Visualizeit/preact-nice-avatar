import GlassesRound from "./GlassesRound";
import GlassesSquare from "./GlassesSquare";

interface GlassesProps {
  style: "round" | "square" | "none";
}

const Glasses = ({ style }: GlassesProps) => {
  switch (style) {
    case "round":
      return <GlassesRound />;
    case "square":
      return <GlassesSquare />;
    case "none":
    default:
      return null;
  }
};

export default Glasses;

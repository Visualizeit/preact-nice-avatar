import Up from "./EyebrowUp";
import UpWoman from "./EyebrowUpWoman";

interface EyebrowProps {
  style: "up" | "upWoman";
}

const Eyebrow = ({ style }: EyebrowProps) => {
  switch (style) {
    case "upWoman":
      return <UpWoman />;
    case "up":
    default:
      return <Up />;
  }
};

export default Eyebrow;

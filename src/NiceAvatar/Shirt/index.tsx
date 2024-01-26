import chroma from "chroma-js";

import ShirtHoody from "./ShirtHoody";
import ShirtShort from "./ShirtShort";
import ShirtPolo from "./ShirtPolo";

interface ShirtProps {
  style: "hoody" | "polo" | "short";
  color: string;
}

const Shirt = ({ color, style }: ShirtProps) => {
  const secondColor = chroma(color).brighten(1).hex();

  switch (style) {
    case "hoody":
      return <ShirtHoody color={color} lightColor={secondColor} />;
    case "polo":
      return <ShirtPolo color={color} lightColor={secondColor} />;
    case "short":
    default:
      return <ShirtShort color={color} />;
  }
};

export default Shirt;

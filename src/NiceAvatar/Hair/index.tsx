import HairThick from "./HairThick";
import HairMohawk from "./HairMohawk";
import HairWomanLong from "./HairWomanLong";
import HairWomanShort from "./HairWomanShort";
import HairNormal from "./HairNormal";

interface HairProps {
  style: "thick" | "mohawk" | "womanLong" | "womanShort" | "normal";
  color: string;
  colorRandom: boolean;
}

const Hair = ({ style, color, colorRandom }: HairProps) => {
  switch (style) {
    case "thick":
      return <HairThick color={color} colorRandom={colorRandom} />;
    case "mohawk":
      return <HairMohawk color={color} colorRandom={colorRandom} />;
    case "womanLong":
      return <HairWomanLong color={color} />;
    case "womanShort":
      return <HairWomanShort color={color} />;
    case "normal":
    default:
      return <HairNormal color={color} />;
  }
};

export default Hair;

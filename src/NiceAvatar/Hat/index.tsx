import HatTurban from "./HatTurban";
import HatBeanie from "./HatBeanie";

interface HatProps {
  style: "beanie" | "turban" | "none";
  color: string;
}

const Hat = ({ style, color }: HatProps) => {
  switch (style) {
    case "beanie":
      return <HatBeanie color={color} />;
    case "turban":
      return <HatTurban color={color} />;
    case "none":
    default:
      return null;
  }
};

export default Hat;

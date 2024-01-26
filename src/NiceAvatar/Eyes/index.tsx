import EyesCircle from "./EyesCircle";
import EyesOval from "./EyesOval";
import EyesSmile from "./EyesSmile";

interface EyesProps {
  style: "circle" | "oval" | "smile";
}

const Eyes = ({ style }: EyesProps) => {
  switch (style) {
    case "circle":
      return <EyesCircle />;
    case "smile":
      return <EyesSmile />;
    case "oval":
    default:
      return <EyesOval />;
  }
};

export default Eyes;

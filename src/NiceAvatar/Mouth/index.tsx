import MouthLaugh from "./MouthLaugh";
import MouthSmile from "./MouthSmile";
import MouthPeace from "./MouthPeace";

interface MouthProps {
  style: "laugh" | "smile" | "peace";
}

const Mouth = ({ style }: MouthProps) => {
  switch (style) {
    case "laugh":
      return <MouthLaugh />;
    case "smile":
      return <MouthSmile />;
    case "peace":
    default:
      return <MouthPeace />;
  }
};

export default Mouth;

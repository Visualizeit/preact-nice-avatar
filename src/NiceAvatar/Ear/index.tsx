import EarSmall from "./EarSmall";
import EarBig from "./EarBig";

interface EarProps {
  size: "small" | "big";
  color: string;
}

const Ear = ({ size, color }: EarProps) => {
  return (
    <>
      {size === "small" && <EarSmall color={color} />}
      {size === "big" && <EarBig color={color} />}
    </>
  );
};

export default Ear;

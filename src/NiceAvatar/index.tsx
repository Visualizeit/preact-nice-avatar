import type { NiceAvatarProps } from "./types";

import { genConfig, defaultOptions } from "./utils";

import Face from "./Face";
import Hair from "./Hair";
import Hat from "./Hat";
import Ear from "./Ear";
import Eyebrow from "./Eyebrow";
import Eye from "./Eyes";
import Glasses from "./Glasses";
import Nose from "./Nose";
import Mouth from "./Mouth";
import Shirt from "./Shirt";

const NiceAvatar = (props: NiceAvatarProps) => {
  const {
    id,
    className,
    style,
    shape = "circle",
    hairColorRandom = false,
  } = props;

  const config = genConfig(props);

  // Background shape
  let borderRadius;
  switch (shape) {
    case "circle": {
      borderRadius = "100%";
      break;
    }
    case "rounded": {
      borderRadius = "6px";
      break;
    }
    case "square": {
      borderRadius = 0;
      break;
    }
  }

  return (
    <div
      id={id}
      className={className}
      style={{
        background: config.bgColor,
        overflow: "hidden",
        borderRadius,
        ...style,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "90%",
          }}
        >
          <Face color={config.faceColor} />
          <Hat color={config.hatColor} style={config.hatStyle} />
          {config.hatStyle === "none" && (
            <Hair
              color={config.hairColor}
              style={config.hairStyle}
              colorRandom={hairColorRandom}
            />
          )}

          {/* Face detail */}
          <div
            style={{
              position: "absolute",
              right: "-3%",
              top: "30%",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Eyebrow style={config.eyeBrowStyle} />
            <Eye style={config.eyeStyle} />
            <Glasses style={config.glassesStyle} />
            <Ear color={config.faceColor} size={config.earSize} />
            <Nose style={config.noseStyle} />
            <Mouth style={config.mouthStyle} />
          </div>

          <Shirt color={config.shirtColor} style={config.shirtStyle} />
        </div>
      </div>
    </div>
  );
};

export default NiceAvatar;

// export { genConfig } from "./utils";

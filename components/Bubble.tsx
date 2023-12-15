import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBubble = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38 0 2.97 2.41 5.38 5.38 5.38 2.97 0 5.38-2.41 5.38-5.38 0-2.97-2.41-5.38-5.38-5.38M6.36 13.03a3.329 3.329 0 1 0-.002 6.662 3.329 3.329 0 0 0 .002-6.662M16.62 16.62c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81"
    />
  </Svg>
);
export default SvgBubble;

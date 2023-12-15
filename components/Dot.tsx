import * as React from "react";
import Svg, { Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDot = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={12}
    height={12}
    fill="currentColor"
    {...props}
  >
    <Circle cx={6} cy={6} r={6} fill="currentColor" />
  </Svg>
);
export default SvgDot;

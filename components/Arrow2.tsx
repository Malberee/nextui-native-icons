import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrow2 = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.28 10.45 21 6.73l-3.72-3.72M3 6.73h18M6.72 13.55 3 17.27l3.72 3.72M21 17.27H3"
    />
  </Svg>
);
export default SvgArrow2;

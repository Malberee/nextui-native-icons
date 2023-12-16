import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSafeHome = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M23 15.37v2.19c0 2.44-1.78 4.74-4.2 5.41-.17.04-.35.04-.51 0A5.681 5.681 0 0 1 15.34 21c-.79-.98-1.25-2.19-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14c.63-.25 1.33-.25 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04"
    />
    <Path
      fill="currentColor"
      d="m20.95 11.01-.18 1.07-.7-.28c-.99-.4-2.07-.4-3.08 0l-2.79 1.15c-.95.4-1.61 1.39-1.61 2.42v2.19c0 1.19.33 2.38.94 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-1.26-7.55c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77"
    />
  </Svg>
);
export default SvgSafeHome;

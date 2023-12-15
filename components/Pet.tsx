import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPet = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M19.08 15.72c-.59-3.53-3.98-6.4-7.56-6.4-3.89 0-7.31 3.15-7.64 7.03-.13 1.5.35 2.92 1.34 3.99C6.2 21.41 7.58 22 9.08 22h4.68c1.69 0 3.17-.66 4.18-1.85 1.01-1.19 1.41-2.77 1.14-4.43M10.28 7.86a2.93 2.93 0 1 0 0-5.86 2.93 2.93 0 0 0 0 5.86M16.94 9.03a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88M20.55 12.93a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9M3.94 10.98a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88"
    />
  </Svg>
);
export default SvgPet;

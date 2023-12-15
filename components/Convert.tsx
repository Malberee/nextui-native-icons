import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgConvert = (props: SvgProps) => (
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
      d="M12.005 21.984c5.511 0 9.98-4.468 9.98-9.979 0-5.511-4.469-9.98-9.98-9.98s-9.98 4.469-9.98 9.98 4.469 9.98 9.98 9.98"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.137 4.022 8.163 8.183.02-4.541M17.863 19.978 9.7 11.805l-.02 4.531"
    />
  </Svg>
);
export default SvgConvert;

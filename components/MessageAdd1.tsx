import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMessageAdd1 = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16 2H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6V8c0-4-2-6-6-6m-.5 10.75h-2.75v2.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.75H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75V8.5c0-.41.34-.75.75-.75s.75.34.75.75v2.75h2.75c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default SvgMessageAdd1;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSignpost = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="m18.34 14.13-2.18-1.75c-.31-.24-.7-.38-1.1-.38h-2.31V9h4.47c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75H8.96c-.39 0-.78.14-1.09.38L5.68 4.13c-.87.7-.87 2.04 0 2.74l2.19 1.75c.31.24.7.38 1.09.38h2.29v3H6.8c-.97 0-1.75.78-1.75 1.75v3.5c0 .97.78 1.75 1.75 1.75h4.45v2.25H9c-.41 0-.75.34-.75.75s.34.75.75.75h6c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25V19h2.31c.4 0 .79-.14 1.1-.38l2.18-1.75c.88-.7.88-2.04 0-2.74"
    />
  </Svg>
);
export default SvgSignpost;
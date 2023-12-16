import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgJudge = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M20.54 19.04c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.95-4.95.53-.53.53-.53 4.95 4.95c.29.29.29.77 0 1.06M6.47 9.28l5.8 5.8c.39.39.39 1.02 0 1.41l-.9.91c-.81.8-2.09.8-2.89 0l-4.34-4.34c-.79-.79-.79-2.08 0-2.88l.91-.91c.39-.38 1.03-.38 1.42.01"
    />
    <Path
      fill="currentColor"
      d="m18.59 10.19-3.81 3.8c-.4.4-1.04.4-1.44 0L7.56 8.21c-.4-.4-.4-1.04 0-1.44l3.81-3.81c.79-.79 2.08-.79 2.88 0l4.34 4.34c.79.8.79 2.08 0 2.89M8 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default SvgJudge;

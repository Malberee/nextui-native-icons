import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLamp = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12.5 5.48c.08 0 .16 0 .25.01V2.53c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.96c.08-.01.16-.01.25-.01-4.61.23-8.28 4.03-8.28 8.7v1.94c0 1.1.9 2 2 2h13.56c1.1 0 2-.9 2-2v-1.94c0-4.67-3.67-8.47-8.28-8.7M14.73 19.11c.33 0 .57.31.49.63A3.336 3.336 0 0 1 12 22.22c-1.54 0-2.84-1.05-3.22-2.48-.08-.32.16-.63.49-.63z"
    />
  </Svg>
);
export default SvgLamp;

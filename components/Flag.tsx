import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlag = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="m18.02 12.33-1.22-1.22a1.39 1.39 0 0 1-.47-1.03c-.02-.45.16-.9.49-1.23l1.2-1.2c1.04-1.04 1.43-2.04 1.1-2.83-.32-.78-1.31-1.21-2.77-1.21H5.9v-.86c0-.41-.34-.75-.75-.75s-.75.34-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75v-4.88h10.45c1.44 0 2.41-.44 2.74-1.23.33-.79-.05-1.78-1.07-2.81"
    />
  </Svg>
);
export default SvgFlag;

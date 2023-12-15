import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCrown1 = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M22 5.71v9.58c0 2.76-2.24 5-5 5H7c-.46 0-.9-.06-1.33-.18-.62-.17-.82-.96-.36-1.42L15.94 8.06c.22-.22.55-.27.86-.21.32.06.67-.03.92-.27L20.29 5c.94-.94 1.71-.63 1.71.71M14.64 7.36 4.17 17.83c-.48.48-1.28.36-1.6-.24-.37-.68-.57-1.47-.57-2.3V5.71c0-1.34.77-1.65 1.71-.71l2.58 2.59c.39.38 1.03.38 1.42 0L11.29 4c.39-.39 1.03-.39 1.42 0l1.94 1.94c.38.39.38 1.03-.01 1.42"
    />
  </Svg>
);
export default SvgCrown1;
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCd = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 12.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5"
    />
  </Svg>
);
export default SvgCd;

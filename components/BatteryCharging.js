import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBatteryCharging = (props) => (
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
      d="M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35m-.4 8.89c-.02.04-.05.08-.08.11l-1.87 2.19c-.15.17-.36.26-.57.26-.17 0-.35-.06-.49-.18A.756.756 0 0 1 9.44 15l1.8-2.11c.01-.03 0-.06-.02-.09-.02-.04-.06-.06-.11-.06H9.12c-.59 0-1.11-.3-1.41-.81-.29-.51-.29-1.11 0-1.62l1.71-2.26a.75.75 0 0 1 1.2.9l-1.65 2.19c.03-.04.03 0 .05.05.02.04.06.06.11.06h2.01c.59 0 1.11.3 1.41.81.27.51.27 1.11-.02 1.62"
    />
  </Svg>
);
export default SvgBatteryCharging;

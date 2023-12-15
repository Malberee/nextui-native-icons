import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStatus = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M9 14.22H3.92c-.61 0-1.17.31-1.49.83-.32.51-.35 1.12-.09 1.66a10.84 10.84 0 0 0 6.09 5.43c.18.06.38.1.57.1a1.764 1.764 0 0 0 1.75-1.76l.01-4.5c0-.47-.18-.91-.51-1.24A1.79 1.79 0 0 0 9 14.22M22.48 9.6C21.36 4.68 17.05 1.25 12 1.25c-5.05 0-9.36 3.43-10.48 8.35-.12.52 0 1.05.34 1.47.34.42.84.66 1.38.66h17.53a1.735 1.735 0 0 0 1.71-2.13M20.06 14.27 15 14.26a1.739 1.739 0 0 0-1.75 1.75l.01 4.48a1.764 1.764 0 0 0 1.75 1.76c.19 0 .38-.03.56-.1 2.62-.92 4.84-2.89 6.07-5.38a1.7 1.7 0 0 0-.08-1.65c-.33-.54-.89-.85-1.5-.85"
    />
  </Svg>
);
export default SvgStatus;

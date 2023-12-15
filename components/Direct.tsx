import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDirect = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.567 2.567 0 0 0-2.29-1.42H2.7c-.39 0-.7.31-.7.7v3.26C2 19.83 4.18 22 7.82 22h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85c0-.38-.31-.7-.7-.7"
    />
    <Path
      fill="currentColor"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v3.04c.22-.08.46-.12.7-.12h3.5c1.55 0 2.94.86 3.63 2.25l.75 1.47h2.86l.75-1.48a4.035 4.035 0 0 1 3.63-2.24h3.48c.24 0 .48.04.7.12V7.81C22 4.17 19.83 2 16.19 2m-5.74 3.41h3.1c.38 0 .7.31.7.69 0 .39-.32.7-.7.7h-3.1c-.38 0-.7-.31-.7-.7a.7.7 0 0 1 .7-.69m3.88 4.18H9.67c-.38 0-.69-.31-.69-.69 0-.39.31-.7.69-.7h4.66c.38 0 .69.31.69.7 0 .38-.31.69-.69.69"
    />
  </Svg>
);
export default SvgDirect;

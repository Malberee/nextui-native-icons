import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDocumentFavorite = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1m-8.02 5.51c-.52 1.67-2.35 2.57-2.98 2.57-.64 0-2.43-.87-2.98-2.57-.36-1.11.05-2.56 1.32-2.97.58-.19 1.2-.08 1.65.27a1.8 1.8 0 0 1 1.66-.27c1.28.41 1.68 1.86 1.33 2.97"
    />
    <Path
      fill="currentColor"
      d="M17.43 8.81c.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67"
    />
  </Svg>
);
export default SvgDocumentFavorite;

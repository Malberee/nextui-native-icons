import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDocumentPrevious = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54"
    />
    <Path
      fill="currentColor"
      d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1M13 15.75H8.81l.72.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2-2a.782.782 0 0 1-.15-.22c-.01-.02-.02-.05-.03-.07-.02-.06-.03-.12-.04-.18v-.08c0-.08.02-.16.05-.24 0-.01 0-.01.01-.02.03-.08.09-.16.15-.22.01-.01.01-.02.02-.02l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.72.72H13c.41 0 .75.34.75.75s-.34.74-.75.74"
    />
  </Svg>
);
export default SvgDocumentPrevious;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNote1 = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M16 4.25c0 1.24-1.01 2.25-2.25 2.25h-3.5c-.62 0-1.18-.25-1.59-.66C8.25 5.43 8 4.87 8 4.25 8 3.01 9.01 2 10.25 2h3.5c.62 0 1.18.25 1.59.66.41.41.66.97.66 1.59"
    />
    <Path
      fill="currentColor"
      d="M18.83 5.03a2.83 2.83 0 0 0-.77-.45c-.29-.11-.58.12-.64.42-.34 1.71-1.85 3-3.67 3h-3.5c-1 0-1.94-.39-2.65-1.1a3.7 3.7 0 0 1-1.02-1.89c-.06-.3-.36-.54-.65-.42C4.77 5.06 4 6.12 4 8.25V18c0 3 1.79 4 4 4h8c2.21 0 4-1 4-4V8.25c0-1.63-.45-2.63-1.17-3.22M8 12.25h4c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75m8 5.5H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default SvgNote1;

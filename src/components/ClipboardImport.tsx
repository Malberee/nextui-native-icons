import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClipboardImport = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M14.35 2h-4.7c-1.04 0-1.89.84-1.89 1.88v.94c0 1.04.84 1.88 1.88 1.88h4.71c1.04 0 1.88-.84 1.88-1.88v-.94C16.24 2.84 15.39 2 14.35 2"
    />
    <Path
      fill="currentColor"
      d="M17.24 4.82c0 1.59-1.3 2.89-2.89 2.89h-4.7c-1.59 0-2.89-1.3-2.89-2.89 0-.56-.6-.91-1.1-.65a4.472 4.472 0 0 0-2.37 3.95v9.41C3.29 19.99 5.3 22 7.76 22h8.48c2.46 0 4.47-2.01 4.47-4.47V8.12c0-1.71-.96-3.2-2.37-3.95-.5-.26-1.1.09-1.1.65M15.75 17c0 .41-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.19l-4.72-4.72a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.72 4.72V14c0-.41.34-.75.75-.75s.75.34.75.75z"
    />
  </Svg>
);
export default SvgClipboardImport;
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArchiveBook = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M14.93 2.5v5.9c0 .44-.52.66-.84.37l-1.75-1.61a.496.496 0 0 0-.68 0l-1.75 1.6c-.32.3-.84.07-.84-.36V2.5c0-.28.22-.5.5-.5h4.86c.28 0 .5.22.5.5"
    />
    <Path
      fill="currentColor"
      d="M16.98 2.06c-.29-.04-.55.21-.55.5v6.02c0 .76-.45 1.45-1.15 1.76-.7.3-1.51.17-2.07-.35l-.87-.8a.496.496 0 0 0-.68 0l-.87.8c-.36.34-.83.51-1.3.51a1.9 1.9 0 0 1-.77-.16c-.7-.31-1.15-1-1.15-1.76V2.56c0-.29-.26-.54-.55-.5C4.22 2.41 3 4.3 3 7v10c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5V7c0-2.7-1.22-4.59-4.02-4.94m.52 16.69H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-4h-4.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.25c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default SvgArchiveBook;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDocumentFilter = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M3.23 1h8.13c.68 0 1.23.56 1.23 1.25v1.37c0 .5-.31 1.12-.62 1.43L9.33 7.43c-.37.31-.61.93-.61 1.43v2.68c0 .37-.25.87-.55 1.06l-.87.57c-.8.5-1.91-.06-1.91-1.06V8.8c0-.44-.25-1-.49-1.31l-2.34-2.5C2.25 4.68 2 4.12 2 3.75V2.31C2 1.56 2.55 1 3.23 1"
    />
    <Path
      fill="currentColor"
      d="M17 2h-2.4c-.28 0-.5.22-.5.5v1.12c0 .99-.53 1.96-1.05 2.49l-2.72 2.43c-.03.07-.08.17-.11.25v2.75c0 .91-.54 1.9-1.28 2.35l-.82.53c-.46.29-.97.43-1.48.43-.46 0-.92-.12-1.34-.35a2.718 2.718 0 0 1-1.147-1.226c-.122-.26-.153-.55-.153-.836V10.21a.47.47 0 0 0-.15-.35l-1-1a.495.495 0 0 0-.85.35V17c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5m1 15.75h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75m0-4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default SvgDocumentFilter;

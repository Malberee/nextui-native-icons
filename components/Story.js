import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStory = (props) => (
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
      d="M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0M8.25 22.39c-.09 0-.19-.02-.28-.05-2.25-.9-4.07-2.49-5.29-4.59a10.6 10.6 0 0 1-1.34-6.73c.05-.41.44-.7.84-.65.41.05.7.43.65.84A9.19 9.19 0 0 0 3.98 17a9.104 9.104 0 0 0 4.54 3.94c.38.16.57.59.42.98-.11.29-.4.47-.69.47M5.85 5.23c-.22 0-.44-.1-.59-.29a.74.74 0 0 1 .13-1.05C7.29 2.4 9.58 1.61 12 1.61c2.36 0 4.61.76 6.5 2.2A.749.749 0 1 1 17.59 5 9.153 9.153 0 0 0 12 3.11c-2.08 0-4.05.68-5.69 1.96-.14.11-.3.16-.46.16M15.75 22.39c-.3 0-.58-.18-.7-.47a.76.76 0 0 1 .42-.98c1.93-.78 3.5-2.14 4.54-3.94a9.044 9.044 0 0 0 1.15-5.78c-.05-.41.24-.79.65-.84.4-.05.79.24.84.65.3 2.35-.16 4.68-1.34 6.73-1.21 2.1-3.04 3.68-5.29 4.59-.08.02-.17.04-.27.04"
    />
  </Svg>
);
export default SvgStory;

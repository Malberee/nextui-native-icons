import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDirectboxNotif = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M18.69 11.53c-.57-.15-1.24-.23-2.04-.23-1.11 0-1.52.27-2.09.7-.03.02-.06.05-.09.08l-.95 1.01c-.79.85-2.24.85-3.04 0l-.95-1a.382.382 0 0 0-.09-.09c-.58-.43-.99-.7-2.09-.7-.8 0-1.47.07-2.04.23-2.38.64-2.38 2.53-2.38 4.19v.93c0 2.51 0 5.35 5.35 5.35h7.44c3.55 0 5.35-1.8 5.35-5.35v-.93c0-1.66 0-3.55-2.38-4.19"
    />
    <Path
      fill="currentColor"
      d="M14.79 2H9.21C4.79 2 4.79 4.35 4.79 6.42v3.7c.04-.02.09-.03.13-.04.7-.19 1.49-.28 2.43-.28 1.54 0 2.27.45 2.99 1 .1.07.2.16.29.26l.94.99c.1.11.26.17.43.17.17 0 .33-.06.42-.16l.96-1.01c.08-.08.17-.17.27-.24.74-.56 1.46-1.01 3-1.01.94 0 1.73.09 2.43.28.04.01.09.02.13.04v-3.7c0-2.07 0-4.42-4.42-4.42m-1.24 6.5h-3.1c-.38 0-.7-.32-.7-.7 0-.39.32-.7.7-.7h3.1c.38 0 .7.31.7.7 0 .38-.32.7-.7.7m.78-2.79H9.67a.7.7 0 0 1-.69-.7c0-.39.31-.7.69-.7h4.66c.38 0 .69.31.69.7a.7.7 0 0 1-.69.7"
    />
  </Svg>
);
export default SvgDirectboxNotif;
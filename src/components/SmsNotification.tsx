import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSmsNotification = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path fill="currentColor" d="M19.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    <Path fill="currentColor" d="M19.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    <Path
      fill="currentColor"
      d="M20.72 9.31c-.7.22-1.47.26-2.27.06a3.977 3.977 0 0 1-2.8-2.76c-.18-.65-.19-1.29-.08-1.87.13-.64-.32-1.24-.96-1.24H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-5.24c0-.66-.64-1.16-1.28-.95m-5.2 1.84-1.18.94c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l1.18-.94c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06"
    />
  </Svg>
);
export default SvgSmsNotification;

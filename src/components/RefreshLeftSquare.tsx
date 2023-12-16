import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgRefreshLeftSquare = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.33 7.51c.5-.15 1.05-.25 1.67-.25 2.76 0 5 2.24 5 5s-2.24 5-5 5a5.002 5.002 0 0 1-4.16-7.78M9.62 7.65l1.66-1.91M9.62 7.65l1.94 1.42"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
    />
  </Svg>
);
export default SvgRefreshLeftSquare;

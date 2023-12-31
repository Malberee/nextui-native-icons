import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLink = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={12} height={12} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.75}
      d="M9 6.5v3a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3M7.5 1.5h3v3M5 7l5.5-5.5"
    />
  </Svg>
);
export default SvgLink;

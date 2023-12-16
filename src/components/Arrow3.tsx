import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgArrow3 = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.45 6.72 6.73 3 3.01 6.72M6.73 21V3M13.55 17.28 17.27 21l3.72-3.72M17.27 3v18"
    />
  </Svg>
);
export default SvgArrow3;

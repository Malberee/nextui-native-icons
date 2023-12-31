import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCheckmark = (props: SvgProps) => (
  <Svg viewBox="0 0 17 18" width={17} height={18} {...props}>
    <Path
      fill="none"
      stroke="currentColor"
      strokeDasharray={22}
      strokeDashoffset={44}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 9 6 5 8-10"
    />
  </Svg>
);
export default SvgCheckmark;

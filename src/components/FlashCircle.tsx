import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgFlashCircle = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M11.97 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10m3.75 10.35L12 16.58l-.44.5c-.61.69-1.11.51-1.11-.42V12.7h-1.7c-.77 0-.98-.47-.47-1.05L12 7.42l.44-.5c.61-.69 1.11-.51 1.11.42v3.96h1.7c.77 0 .98.47.47 1.05"
    />
  </Svg>
);
export default SvgFlashCircle;

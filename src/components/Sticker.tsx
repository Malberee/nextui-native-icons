import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSticker = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M21.96 11.66a7.484 7.484 0 0 0-3.99-1.16c-4.14 0-7.5 3.36-7.5 7.5 0 1.42.4 2.79 1.15 3.98-.46-.01-.93-.06-1.41-.13-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c4.12.68 7.45 3.99 8.15 8.1.08.48.13.96.14 1.42"
    />
    <Path
      fill="currentColor"
      d="M13.38 21.86A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41"
    />
  </Svg>
);
export default SvgSticker;

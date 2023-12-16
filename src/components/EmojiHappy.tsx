import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEmojiHappy = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M8.5 6.38c1.03 0 1.88.84 1.88 1.88s-.84 1.88-1.88 1.88-1.88-.86-1.88-1.89c0-1.03.85-1.87 1.88-1.87m3.5 12.7c-2.69 0-4.88-2.19-4.88-4.88 0-.7.57-1.28 1.27-1.28h7.2c.7 0 1.27.57 1.27 1.28.02 2.69-2.17 4.88-4.86 4.88m3.5-8.96c-1.03 0-1.88-.84-1.88-1.88s.84-1.88 1.88-1.88 1.88.84 1.88 1.88-.85 1.88-1.88 1.88"
    />
  </Svg>
);
export default SvgEmojiHappy;

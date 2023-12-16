import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEmojiNormal = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M6.47 7.72c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-.65.65-1.5.97-2.35.97-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06M12 18.78c-2.69 0-4.88-2.19-4.88-4.88 0-.7.57-1.28 1.27-1.28h7.2c.7 0 1.27.57 1.27 1.28.02 2.69-2.17 4.88-4.86 4.88m5.53-10c-.65.65-1.5.97-2.35.97-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06"
    />
  </Svg>
);
export default SvgEmojiNormal;

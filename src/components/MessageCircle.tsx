import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMessageCircle = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5.25 10.81c0 .17-.01.33-.03.49-.15 1.77-1.2 2.65-3.12 2.65h-.26a.54.54 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.631.631 0 0 0-.42-.21H9.9c-2.09 0-3.15-.52-3.15-3.15v-2.63c0-1.92.89-2.97 2.65-3.12.16-.01.33-.01.5-.01h4.2c2.09 0 3.15 1.05 3.15 3.15z"
    />
  </Svg>
);
export default SvgMessageCircle;

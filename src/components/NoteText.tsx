import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNoteText = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M8.75 3.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c.25-.03.48-.06.75-.06zM16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5H16c.27 0 .5.03.75.06"
    />
    <Path
      fill="currentColor"
      d="M16.75 3.56V5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.5h-6.5V5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.56C4.3 3.83 3 5.73 3 8.5V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5V8.5c0-2.77-1.3-4.67-4.25-4.94M12 16.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m4-5H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default SvgNoteText;

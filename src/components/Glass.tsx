import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGlass = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M17.71 2h-.95a.715.715 0 0 0 0 1.43h.95a3.1 3.1 0 0 1 3.1 3.09v5.88c-.36-.19-.76-.29-1.19-.29h-3.81c-1.44 0-2.62 1.17-2.62 2.62v1.56h-2.38v-1.56c0-1.45-1.18-2.62-2.62-2.62H4.38c-.43 0-.83.1-1.19.29V6.52a3.1 3.1 0 0 1 3.1-3.09h.95a.715.715 0 0 0 0-1.43h-.95a4.53 4.53 0 0 0-4.53 4.52V19.38c0 1.45 1.18 2.62 2.62 2.62h3.81c1.44 0 2.62-1.17 2.62-2.62v-1.67h2.38v1.67c0 1.45 1.18 2.62 2.62 2.62h3.81c1.44 0 2.62-1.17 2.62-2.62V6.52A4.53 4.53 0 0 0 17.71 2"
    />
  </Svg>
);
export default SvgGlass;

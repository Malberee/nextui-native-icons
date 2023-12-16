import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCloudSunny = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M20.61 10.83a5.238 5.238 0 0 0-2.91-1.78c-.26-1.16-.71-2.16-1.37-2.99-.02-.03-.04-.06-.06-.08-2.2-2.66-5.8-2.65-8.23-1.27-2.08 1.19-3.85 3.7-2.92 7.28-2.13.52-3.11 2.38-3.11 4.06 0 1.88 1.23 3.99 3.97 4.19H16.36c1.42 0 2.78-.53 3.83-1.49 2.51-2.22 2.18-5.84.42-7.92M21.76 8.74c0 .34-.04.67-.14.99a6.62 6.62 0 0 0-2.69-1.87 8.672 8.672 0 0 0-1.48-2.8c.19-.04.39-.05.58-.05a3.73 3.73 0 0 1 3.73 3.73"
    />
  </Svg>
);
export default SvgCloudSunny;

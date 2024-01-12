import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { CircleProps, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  trackColor: string;
  fillerColor: string;
  trackProps: CircleProps;
  fillerProps: CircleProps;
}

const SvgCircularProgress = ({
  trackColor,
  fillerColor,
  trackProps,
  fillerProps,
  ...props
}: Props) => (
  <Svg fill="none" strokeWidth={3} viewBox="0 0 32 32" {...props}>
    <Circle cx={16} cy={16} r={13} stroke={trackColor} {...trackProps} />
    <Circle
      cx={16}
      cy={16}
      r={13}
      strokeDasharray={81}
      strokeDashoffset={61}
      stroke={fillerColor}
      strokeLinecap="round"
      {...fillerProps}
    />
  </Svg>
);
export default SvgCircularProgress;

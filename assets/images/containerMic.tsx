import React from 'react';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

const CustomCircle = () => (
  <Svg width="117" height="117" viewBox="0 0 117 117" fill="none">
    <Defs>
      <RadialGradient
        id="paint0_radial_8_45"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(58.5 58.5) rotate(90) scale(58.5)"
      >
        <Stop offset="0.645" stopColor="#FC746E" />
        <Stop offset="1" stopColor="#FFC0BD" />
      </RadialGradient>
    </Defs>
    <Circle cx="58.5" cy="58.5" r="58.5" fill="url(#paint0_radial_8_45)" />
  </Svg>
);

export default CustomCircle;

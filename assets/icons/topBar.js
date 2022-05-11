import React from 'react';
import Svg, { Path, Defs, Stop, LinearGradient } from "react-native-svg"
import { palette } from '../../global-style';

export default function TopBar({
    width,
    height,
    style
}) {
    return (
        <Svg style={style} preserveAspectRatio="none" width={width} height={height} viewBox="0 0 414 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M414 45.3334C414 45.3334 363.5 68 206.5 68C49.5001 68 9.35343e-05 45.3333 9.35343e-05 45.3333L9.74975e-05 -5.67544e-06L414 3.05176e-05L414 45.3334Z" fill="url(#paint0_linear_1446_57)" />
            <Defs>
                <LinearGradient id="paint0_linear_1446_57" x1="0" y1="56" x2="0" y2="-256" gradientUnits="userSpaceOnUse">
                    <Stop stopColor={palette.darkColor} />
                    <Stop offset="1" stopColor={palette.accentColor} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}
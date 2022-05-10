import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { windowWidth } from '../../global-style';

import Style from './style';

export default ({ active = () => { }, menuContent, velocity = 250 }) => {

    const fade = useRef(new Animated.Value(0)).current;
    const fadeIn = Animated.timing(fade, { toValue: 1, duration: velocity, useNativeDriver: true });
    const fadeOut = Animated.timing(fade, { toValue: 0, duration: velocity, useNativeDriver: true });

    const move = useRef(new Animated.Value(windowWidth)).current;
    const moveIn = Animated.timing(move, { toValue: 0, duration: velocity, useNativeDriver: false });
    const moveOut = Animated.timing(move, { toValue: windowWidth, duration: velocity, useNativeDriver: false });

    const turnOn = () => {
        fadeIn.start();
        moveIn.start();
    }

    const turnOff = () => {
        fadeOut.start();
        moveOut.start();
        setTimeout(() => {
            active(false)
        }, 250);
    }

    useEffect(() => {
        turnOn();
    }, []);

    return (
        <Animated.View style={{ ...Style.mainPage, opacity: fade }}>
            <TouchableOpacity onPress={turnOff} style={Style.screenShadow} />
            <Animated.View style={{ ...Style.menu, left: move }}>
                {menuContent}
            </Animated.View>
        </Animated.View>
    )
}
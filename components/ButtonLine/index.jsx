import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './style';

export default function LineButton({
    color = "#ffffff",
    pd = 8,
    mg = 0,
    loading = false,
    text = 'Button',
    bg = "#21212142",
    radius = 12,
    style,
    onPress = () => { }
}) {
    return (
        <TouchableOpacity activeOpacity={0.6}
            onPress={onPress}
            style={{
                ...styles.wrapper,
                padding: pd,
                margin: mg,
                ...style
            }}>
            <View style={{
                ...styles.content,
                borderRadius: radius,
                backgroundColor: bg,
                borderColor: color,
            }} />
            {loading && <ActivityIndicator color={color} size='small' />}
            {!loading && <Text style={{ color: color }}>{text}</Text>}
        </TouchableOpacity>
    )
}
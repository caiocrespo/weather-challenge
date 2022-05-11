import { StyleSheet } from 'react-native';
import GlobalStyle, { palette } from '../../GlobalStyle';

export default StyleSheet.create({
    ...GlobalStyle,
    background: { transform: [{ rotate: '180deg' }], position: "absolute", bottom: 0 },
    childreContent: {
        position: 'absolute', width: '100%', bottom: 16, paddingHorizontal: 48
    },
    updateText: { color: palette.lightGrayColor, marginBottom: 8, fontSize: 12 }
});
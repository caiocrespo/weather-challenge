import { StyleSheet } from 'react-native';
import GlobalStyle, { palette } from '../../global-style';

export default StyleSheet.create({
    ...GlobalStyle,
    main: { flex: 1 },
    gradient: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 },
    content: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2, paddingHorizontal: 48 },
    temperatureView: { flexDirection: 'row', marginBottom: 64 },
    temperatureDescView: { marginHorizontal: 24, marginVertical: 12 },
    temperatureText: { fontSize: 64, color: palette.darkColor, fontWeight: 'bold' },
    temperatureDesc: { fontSize: 16, color: palette.darkColor, marginTop: 2 },
    text: {...GlobalStyle.text, marginTop: 32, marginBottom: 12}
});
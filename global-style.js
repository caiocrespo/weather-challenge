import { StyleSheet, Dimensions, StatusBar } from 'react-native';

export const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;
export const borderSize = 8;
export const palette = {
    primaryColor: "#F9F68E",
    secondaryColor: "#F887B3",
    accentColor: '#ABBBFE',
    midColor: '#F69F87',
    grayColor: "#707070",
    darkColor: "#212121",
    lightGrayColor: "#a2a2a2",
    lightColor: "#F5F5F5",
}

export default StyleSheet.create({
    pageFrame: { width: windowWidth, height: windowHeight, alignItems: 'stretch', justifyContent: 'center', overflow: 'hidden' },
    content: { flex: 1, alignSelf: 'stretch' },
    title: { color: palette.darkColor, fontSize: 19, fontWeight: 'bold' },
    text: { color: palette.darkColor, fontSize: 16 },
    line: { alignSelf: 'stretch', padding: .5, backgroundColor: palette.lightGrayColor },
});
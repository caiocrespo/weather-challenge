import { StyleSheet, Dimensions, StatusBar } from 'react-native';

export const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;
export const borderSize = 8;
export const palette = {
    mainColor: "#FD5A5B",
    secondaryColor: "#1FC5B6",
    grayColor: "#707070",
    darkColor: "#373634",
    lightGrayColor: "#DDDDDD",
    lightColor: "#F5F5F5",
}

export default StyleSheet.create({
    pageFrame: { width: windowWidth, height: windowHeight, alignItems: 'stretch', justifyContent: 'center', overflow: 'hidden' },
    content: { flex: 1, alignSelf: 'stretch' },
    title: { color: palette.mainColor, fontSize: 19, fontWeight: 'bold' },
    semiTitle: { color: palette.secondaryColor, fontSize: 17, fontWeight: 'bold' },
    blackTitle: { color: palette.darkColor, fontSize: 19, fontWeight: 'bold' },
    text: { color: palette.darkColor, fontSize: 14 },
    hint: { color: palette.grayColor, fontSize: 14 },
    detailText: { color: palette.mainColor, fontSize: 14 },
    mainButton: { paddingVertical: 12, paddingHorizontal: 16, backgroundColor: palette.mainColor, borderRadius: borderSize },
    mainButtonText: { color: "#fff", fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
    lineButton: { paddingVertical: 12, paddingHorizontal: 16, borderWidth: 1, borderColor: palette.mainColor, borderRadius: borderSize },
    lineButtonText: { color: palette.mainColor, fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: palette.mainColor, borderRadius: 12, alignSelf: 'stretch', paddingVertical: 8, paddingHorizontal: 16, fontSize: 16, color: palette.darkColor },
    line: { alignSelf: 'stretch', padding: .5, backgroundColor: palette.lightGrayColor },
});
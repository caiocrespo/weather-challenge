import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../global-style';

export default StyleSheet.create({
    mainPage: { position: 'absolute', width: windowWidth, height: windowHeight },
    screenShadow: { backgroundColor: "#00000099", position: 'absolute', width: windowWidth, height: windowHeight },
    menu: { width: windowWidth * .8, backgroundColor: "#fff", height: windowHeight, alignSelf: 'flex-end', alignItems: 'stretch', position: 'relative' }
});
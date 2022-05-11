import { StyleSheet } from 'react-native';
import GlobalStyle from '../../GlobalStyle';

export default StyleSheet.create({
    ...GlobalStyle,
    content: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, },
    wrapper: { overflow: 'hidden', alignItems: 'center' }
});
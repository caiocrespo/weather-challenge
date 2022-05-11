import { StyleSheet } from 'react-native';
import GlobalStyle, {palette, statusBarHeight} from '../../GlobalStyle';

export default StyleSheet.create({
    ...GlobalStyle,
    main: {backgroundColor: palette.darkColor, height: statusBarHeight + 2}
});
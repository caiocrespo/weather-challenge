import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { Text } from 'react-native';

// icons
// import Logo from './logo';

export default ({ icon, width, height, style }) => {
    if (!icon) throw "Icon is obrigatory to AppIcons component"

    const icons = {
        // 'logo': Logo,
    }

    if (!Object.keys(icons).includes(icon)) return (<Text>Not Found</Text>)
    else return (
        <SvgXml
            xml={icons[icon]}
            width={width || "100%"}
            height={height || "100%"}
            style={style}
        ></SvgXml>
    )
}
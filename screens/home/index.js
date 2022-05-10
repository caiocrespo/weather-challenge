import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import Service from './service'
import Style from './style';


const home = ({ navigator }) => {
    // variables
    const service = new Service();
    service.globalVariables = navigator.globalVariables;

    // state
    const [loading, setLoading] = useState(false);

    // functions
    useEffect(() => {

    }, []);

    return (
        <View>
            <Text>home ready</Text>
        </View>
    )
}

export default home;
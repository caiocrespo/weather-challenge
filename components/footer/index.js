import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TopBar from '../../assets/icons/topBar';

import styles from './style';
import { palette } from '../../GlobalStyle';
import ButtonLine from '../ButtonLine';

export default function Footer({
    loading = false,
    update,
    time,
}) {

    return (
        <>
            <View style={{ height: 64 }} />
            <View style={{ height: 112, position: 'absolute', bottom: 0, width: "100%", zIndex: 5 }}>
                <TopBar style={styles.background} width={"100%"} height={112} />

                <View style={styles.childreContent}>
                    {time && <Text style={styles.updateText}>Última atualização: {time.toLocaleTimeString('pt-BR')}</Text>}
                    <ButtonLine onPress={update} loading={loading} text='Atualizar Agora' color={palette.midColor} />
                </View>
            </View >
        </>
    )
}
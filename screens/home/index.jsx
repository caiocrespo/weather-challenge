import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import SystemBar from '../../components/systemBar';
import Service from './service';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import { palette } from '../../GlobalStyle';
import Footer from '../../components/footer';
import * as Location from 'expo-location';

const home = ({ navigator }) => {
    // variables
    const service = new Service();
    service.globalVariables = navigator.globalVariables;

    // state
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState({});
    const [address, setAddress] = useState();
    const [weather, setWeather] = useState();
    const [time, setTime] = useState();

    // functions
    useEffect(() => {
        fetchLocation()
    }, []);

    useEffect(() => {
        if (!location) return;
        fetchAddress()
        service.fetchWeather(location.coords, setWeather, setLoading, setTime);
    }, [location]);

    const fetchLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }

    const fetchAddress = async () => {
        const { latitude, longitude } = location.coords;
        const response = await Location.reverseGeocodeAsync({
            latitude,
            longitude
        });
        setAddress(response[0]);
    }

    return (
        <View style={styles.pageFrame}>
            <SystemBar />
            <View style={styles.main}>
                <LinearGradient
                    colors={[palette.secondaryColor, palette.primaryColor]}
                    style={styles.gradient}
                />
                <View style={styles.content}>

                    <Text style={styles.text}>Exibindo informações sbre sua localização:</Text>
                    {
                        address &&
                        <Text style={styles.title}>
                            {address.region} - {address.street} | {address.city}
                        </Text>
                    }

                    <View style={{ flex: 1 }} />
                    {weather &&
                        <View style={styles.temperatureView}>
                            <Text style={styles.temperatureText}>{parseFloat(weather.main.temp).toFixed(0)}°</Text>
                            <View style={styles.temperatureDescView}>
                                <Text style={styles.temperatureDesc}>Sensação Térmica: {parseFloat(weather.main.feels_like).toFixed(0)}°</Text>
                                <Text style={styles.temperatureDesc}>Vento: {parseFloat(weather.wind.speed).toFixed(2)} km/h</Text>
                                <Text style={styles.temperatureDesc}>{weather.weather[0].description}</Text>
                            </View>
                        </View>
                    }
                    {!weather && <Text style={styles.title}>Carregando...</Text>}

                </View>
            </View>
            <Footer loading={loading} time={time} update={() => service.fetchWeather(location.coords, setWeather, setLoading, setTime)} />
        </View>
    )
}

export default home;
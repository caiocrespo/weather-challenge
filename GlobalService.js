import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


class GlobalService {
    endpoint = 'https://api.openweathermap.org/data/2.5/';
    globalVariables;


    sleep = (seconds) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, seconds * 1000);
        })
    }


    request = async (method, path, body, query) => {
        const data = body ? JSON.stringify(body) : null;
        const headers = { 'Content-Type': 'application/json' }

        const userdata = this.globalVariables.get('userdata');
        if (userdata) headers['Authorization'] = `Bearer ${userdata.jwt}`;

        query = (query) ? this.mountQuery(query) : "";

        const config = {
            url: `${this.endpoint}/${path}${query}`,
            method, headers, data
        }
        // console.log(config);
        return axios(config).then(resp => resp.data)
    }


    mountQuery = (query) => {
        const mount = Object.keys(query).map(key => {
            return `${key}=${query[key]}`
        });
        return "?" + mount.join('\&');
    }


    restoreUserData = async (callback) => {
        const userdata = await AsyncStorage.getItem("userdata").then(r => JSON.parse(r));
        if (!userdata || this.globalVariables.get('userdata')) return;
        this.globalVariables.set('userdata', userdata);
        callback(userdata);
    }


    storeUserData = async (userdata) => {
        this.globalVariables.set('userdata', userdata);
        await AsyncStorage.setItem('userdata', JSON.stringify(userdata));
    }
}

export default GlobalService;
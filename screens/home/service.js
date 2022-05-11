import GlobalService from "../../GlobalService";

class Service extends GlobalService {
    fetchWeather = async (coords, setState, setLoading, setTime) => {
        setLoading(true);
        const query = {
            lat: coords.latitude,
            lon: coords.longitude,
            lang: 'pt_br',
            appid: '863e16a12c11c27bb8593a7ce222188b',
            units: 'metric',
        }
        const response = await this.request('GET', 'weather', null, query);
        setState(response);
        setLoading(false);
        setTime(new Date());
    }
}

export default Service;
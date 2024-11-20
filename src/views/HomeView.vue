<template>
    <div>
        <the-search-location v-on:search-submit="onSearch"></the-search-location>
        <the-current-weather
            ref="current"
            v-if="currentCondition"
        ></the-current-weather>
        {{ currentCondition }}        
    </div>
</template>

<script>
import TheSearchLocation from '../components/TheSearchLocation.vue';
import TheCurrentWeather from '../components/TheCurrentWeather.vue';
import { useFetch } from '../hooks/useFetch.js';
import { appLanguage } from '../config.js';

export default { 
    components: {
        TheSearchLocation,
        TheCurrentWeather
    },
    data(){
        return {
            fetchWheather: useFetch()
        }
    },
    computed:{
        currentCondition(){
            const currentWeather = this.fetchWheather.data?.current_condition[0];

            if (!currentWeather) return null;
            // [ { "FeelsLikeC": "-6", "FeelsLikeF": "22", "cloudcover": "22", "humidity": "83", "lang_pl": [ { "value": "Bezchmurnie" } ], "localObsDateTime": "2024-11-21 01:25 AM", "observation_time": "09:25 PM", "precipInches": "0.0", "precipMM": "0.0", "pressure": "1021", "pressureInches": "30", "temp_C": "-3", "temp_F": "26", "uvIndex": "0", "visibility": "10", "visibilityMiles": "6", "weatherCode": "113", "weatherDesc": [ { "value": "Clear" } ], "weatherIconUrl": [ { "value": "" } ], "winddir16Point": "S", "winddirDegree": "177", "windspeedKmph": "6", "windspeedMiles": "4" } ]
            const props = {
                tempC: currentWeather.temp_C,
                feelTempC: currentWeather.FeelsLikeC,
                cloudCover: currentWeather.cloudcover,
                humidity: currentWeather.humidity,
                precipMM: currentWeather.precipMM,
                pressure: currentWeather.pressure,
                uvIndex: currentWeather.uvIndex,
                visibility: currentWeather.visibility,
                weatherCode: currentWeather.weatherCode,
                windDirDegree: currentWeather.winddir16Point,
                windSpeedKmph: currentWeather.windspeedKmph
            }


            return props;
        }

    },
    methods: {
        onSearch( searchValue){
            const url = `https://wttr.in/${searchValue}?format=j1&lang=${appLanguage}`
            this.fetchWheather.setNewUrl( url );
        }
    }
}
</script>
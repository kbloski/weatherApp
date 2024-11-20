<template>
    <div>
        <the-search-location v-on:search-submit="onSearch"></the-search-location>
        <the-current-weather 
            tempC="3"
            ref="current" 
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
    watch: {
        currentCondition( val ){
            if (!val) return;

            const currentWeatherEl = this.$refs.current
            currentWeatherEl.$props.tempC = 10
            console.log( currentWeatherEl.$props)

            // console.log( currentWeatherEl. )
            // for(const [attr, value] of Object.entries( val )){
            //     currentWeatherEl.setAttribute( attr, value)
            // }
            // document.getElementById('id').setAttributes
        }
    },
    computed:{
        currentCondition(){
            const currentWeather = this.fetchWheather.data?.current_condition[0];

            if (!currentWeather) return null;

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
<template>
    <div>
        <h3>Pogoda na 3 najbliższe dni co 3 godziny</h3>
        <next-day-weather-info
            v-if="weatherList"
            v-for="weather in weatherList"
            :key="weather.date"
            v-bind="weather"
        ></next-day-weather-info>
    </div>
</template>

<script>
import NextDayWeatherInfo from './NextDayWeatherInfo.vue';

export default {
    components: {
        NextDayWeatherInfo
    },
    props: {
        weatherList: { required: true}
    }
}
</script>


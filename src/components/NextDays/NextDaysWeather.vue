<template>
    <div>
        <h3>Wykresy pogodowe</h3>
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

<style scoped>
h3 {
    border-bottom: 2px solid rgb(71, 71, 71);
}
@media screen and (max-width: 800px) {
    h3 {
        text-align: center;
    }
}
</style>
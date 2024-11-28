<template>
    <section class="weather-info-container">
        <div class="weather-info-header">
            <h4>
                {{ getNameWeekDayByNumber( dayDate.getDay()) }}
                {{ date}}
            </h4>
            <weather-info-header
                :date
                :avgtempC
                :avgtempF
                :moonPhase
                :moonIllumination
                :sunRise
                :sunSet
                :moonRise
                :moonSet
            ></weather-info-header>
        </div>
        <weather-hourly-list 
            :hourly="hourly"
            :date="date"
        ></weather-hourly-list>
    </section>
</template>

<script>
import { computed } from 'vue';
import { getNameWeekDayByNumber } from '@/utils/getNameWeekDay';
import WeatherInfoHeader from './WeatherInfoHeader.vue';
import WeatherHourlyList from './WeatherHourlyChart.vue';

export default {
    components: {
        WeatherInfoHeader,
        WeatherHourlyList
    },
    props: {
        astronomy: { required: true},
        avgtempC: { required: true},
        avgtempF: { required: true},
        date: { required: true},
        hourly: { required: true }
    },
    setup( props ){
        const moonIllumination = 
            computed( () => props.astronomy[0].moon_illumination)
        const moonPhase =
            computed( () => props.astronomy[0].moon_phase)
        const moonRise = 
            computed( () => props.astronomy[0].moonrise)
        const moonSet = 
            computed( () => props.astronomy[0].moonset)
        const sunRise = 
            computed( () => props.astronomy[0].sunrise)
        const sunSet = 
            computed( () => props.astronomy[0].sunset)

        const dayDate = computed( () => new Date(props.date) )

        return {
            dayDate,
            moonIllumination,
            moonPhase,
            moonRise,
            moonSet,
            sunRise,
            sunSet,
            getNameWeekDayByNumber
        }
    }
}
</script>

<style scoped>
.weather-info-container {
    background-color: rgba(255, 255, 255, 0.3);
    margin-top: 1rem;
}

.weather-info-header {
    padding: .5rem;
}

h4 {
    text-transform: capitalize;
    margin: 0;
    margin-bottom: .5rem;
    border-bottom: 2px solid v;
}
</style>
<template>
    <section>
        <h4>
            {{ getNameWeekDayByNumber( dayDate.getDay()) }}
            ( {{ date }} )
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
        // const 

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
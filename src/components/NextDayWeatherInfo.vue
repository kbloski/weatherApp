<template>
    <div>
        <div>
            {{ getNameWeekDayByNumber( dayDate.getDay()) }}
            ( {{ date }} )
        </div>
        <div>
            <div>Oświetlenie księżyca: {{ moonIllumination }}%</div>
            <div>Faza księżyca: {{ moonPhase }}</div>
            <div>Wschód słońca: {{ sunRise }}</div>
            <div>Zachód słońca: {{ sunSet }}</div>
            <div>Wschód księżyca: {{ moonRise }}</div>
            <div>Zachód księżyca: {{ moonSet }}</div>
        </div>
        <div>
            Średnia dzienna temperatura: 
            {{  avgtempC }}℃  ({{  avgtempF }}℉)
        </div>
        <div> 
            {{ hourly }}
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { getNameWeekDayByNumber } from '@/utils/getNameWeekDay';

export default {
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
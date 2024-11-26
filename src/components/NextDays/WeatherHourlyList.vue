<template>
    <ul>
        <li v-for="weather in hourly">
            <span>
                Opis pogody:
                {{  getWeatherDesc( weather) }}
            </span>
            <span>
                Temp: {{ weather.DewPointC }} ({{ weather.DewPointF }})
            </span>
            <span>
                Wilgotność: {{ weather.humidity}} %
            </span>
            <span>
                Prędkość wiatru {{ weather.WindGustKmph }} km/h
            </span>
            <span>
                Widoczność: {{  weather.visibility }} km
            </span>
        </li>
    </ul>
</template>

<script>
export default{
    props: [ 'hourly' ],
    methods: {
        getWeatherDesc( weather){
            return weather.weatherDesc[0].value
        }
    }
}
</script>


<template>
    <!-- <ul>
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
    </ul> -->
    <div :id="elementId" class="hourly-chart"></div>
</template>

<script>
import { createRandomId } from "@/utils/createRandomId";
import { drawChart } from "@/utils/drawCurveChart";

export default {
    props: ["hourly", "date"],
    data() {
        return {
            elementId: createRandomId("chart-hourly"),
            temperatures: [],
        };
    },
    watch: {
        hourly(){
            this.drawTempChart()
        }
    },
    computed: {
        hourlyData(){
            return this.$props.hourly
        }
    },
    methods: {
        drawTempChart() {
            this.temperatures = []
            for (const hour in this.hourlyData) {
                const data = this.hourlyData[hour];
                this.temperatures.push(["", Number(data.tempC), Number(data.DewPointC)]);
            }

            drawChart({
                data: [["", `Temp. powietrza`, "Temp. odczuwalna"], ...this.temperatures],
                title: `Wykres temperatur dla dnia (${this.$props.date})`,
                elementId: this.elementId,
            });
        },
        getWeatherDesc(weather) {
            return weather.weatherDesc[0].value;
        },
    },
    mounted() {
        this.drawTempChart();

        window.addEventListener('resize', () => {
            this.drawTempChart()
        })
    },
};
</script>

<style lang="css" scoped>
.hourly-chart {
    min-height: 200px;
}
</style>

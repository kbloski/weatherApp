<template>
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
                data: [["", `Temp. powietrza (°C)`, "Temp. odczuwalna (°C)"], ...this.temperatures],
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
    border-radius: 1rem;
    margin-top: 1rem;
    overflow: hidden;
}
</style>

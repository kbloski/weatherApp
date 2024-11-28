<template>
    <base-dropdown 
        @visibility="onActiveDropdown" 
        :visibility="isDropdownActive"
    >
        <template v-slot:actions >
           <div v-if="!isDropdownActive">Pokaż wykres temperatur</div> 
           <div v-else>Ukryj wykres</div> 
        </template>
        
        <template v-slot:default>
            <div 
                :id="elementId" 
                class="hourly-chart"
            ></div>
        </template>
    </base-dropdown>
</template>

<script>
import { createRandomId } from "@/utils/createRandomId";
import { drawChart } from "@/utils/drawCurveChart";

export default {
    props: ["hourly", "date"],
    data() {
        return {
            elementId: null,
            temperatures: [],
            isDropdownActive: false
        };
    },
    computed: {
        hourlyData(){
            return this.$props.hourly
        }
    },
    mounted(){
        window.addEventListener('resize', () => {
            if (!this.isDropdownActive) return;
            this.drawTempChart()
        })
    },
    methods: {
        onActiveDropdown( visibility ){
            this.isDropdownActive = visibility;
                setTimeout(() => {
                if ( visibility ) this.drawTempChart()
                
            }, 0)
        },

        drawTempChart() {
            this.temperatures = []

            let currentHour = 0
            for (const hour in this.hourlyData) {
                const data = this.hourlyData[hour];
                this.temperatures.push([
                    `${parseInt(currentHour)}h`, 
                    Number(data.tempC), 
                    Number(data.DewPointC)]
                );
                currentHour += 24/7
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
    created(){
        this.elementId = createRandomId("chart-hourly")
    },
};
</script>

<style lang="css" scoped>
.hourly-chart {
    min-height: 200px;
    margin-top: 1rem;
    overflow: hidden;
}
</style>

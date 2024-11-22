<template>
    <section class="current-wheather-container">
        <header>
            <div class="location-name">
                <h1>{{ location }}</h1>
            </div>
        </header>
        <div class="current-wheater-body">
            <div class="wheater-information">
                <div>
                    <h3>
                        Temperatura: {{ temp_C }} ℃ / {{ temp_F }} ℉
                    </h3>
                    <h4>
                        Odczuwalna: {{ FeelsLikeC }} ℃ / {{ FeelsLikeF }} ℉
                    </h4>
                    
                </div>
                <div>
                    <h3>
                        {{ description }}
                    </h3>
                </div>
                <div>
                    <h3>
                        Ciśnienie: {{ pressure }}Pa
                    </h3>
                </div>
                <div>
                    <h3>Prędkość wiatru: </h3>
                    <h4>{{ windspeedKmph }} km/h</h4>
                    <h4>{{ windspeedMiles }} mph</h4>
                </div>
            </div>
            <ul>
                <li>{{ localObsDateTime }}</li>
                <li>{{ cloudcover}} </li>
                <li>{{ humidity}} </li>
                <li>{{ precipMM}} </li>
                <li>{{ visibility }} </li>
                <li>{{ winddir16Point }} </li>
            </ul>
        </div>
    </section>
</template>


<script>

export default {
    props: [
"location",
"FeelsLikeC",
"FeelsLikeF",
"cloudcover",
"humidity",
"localObsDateTime",
"observation_time",
"precipInches",
"precipMM",
"pressure",
"pressureInches",
"temp_C",
"temp_F",
"uvIndex",
"visibility",
"visibilityMiles",
"weatherCode",
"weatherDesc",
"winddir16Point",
"winddirDegree",
"windspeedKmph",
"windspeedMiles",
    ],
    computed:{
        description(){
            const descriptionArr = this.$props?.weatherDesc

            if (descriptionArr) return descriptionArr[0].value
            return  null
        }
    }
}
</script>

<style scoped>
.current-wheather-container{
    margin-top: 1rem;
    --padding-container: 10px;
    color: white;
    background-color: rgba(34, 79, 131, 0.8);
    font-weight: lighter;
}

.current-wheater-body {
    padding: var(--padding-container);
}

.location-name {
    padding: 0;
    margin: 0;
}

header {
    background-color: #224F83;
    padding: var(--padding-container);

}

.wheater-information{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>
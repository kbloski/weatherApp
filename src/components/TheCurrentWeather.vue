<template>
    <section class="current-wheather-container">
        <header>
            <div class="location-name">
                <h1>{{ location }}</h1>
            </div>
        </header>
        <div class="wheter-badge-info">
            <iframe 
                :src="wetherUrl"  
                frameborder="0"
            ></iframe>
        </div>
        <div class="current-wheater-body">
            <h2>Pogoda teraz</h2>
            <div>
               Czas zarejstrowania warunków pogodowych: 
               <span>{{ recordDate }}</span>
            </div>
            <div class="slider"></div>

        
            <div class="wheater-information">
                <div>
                    <h3>Temperatura</h3>
                    <div>Bierząca: {{ temp_C }} ℃ / {{ temp_F }} ℉ </div>
                    <div>Odczuwalna: {{ FeelsLikeC }} ℃ / {{ FeelsLikeF }} ℉ </div>
                </div>
                <div>
                    <h3>Opis pogody</h3>
                    <div>{{ description }}</div>
                </div>
                <div>
                    <h3>Ciśnienie</h3>
                    <div> {{ pressure }}Pa </div>
                </div>
                <div>
                    <h3>Prędkość wiatru</h3>
                    <div>{{ windspeedKmph }} km/h</div>
                    <div>{{ windspeedMiles }} mph</div>
                </div>
            </div>
            <div class="slider"></div>
            <ul>
                <li>Zachmurzenie: {{ cloudcover}}% </li>
                <li>Wilgotność {{ humidity}}%</li>
                <li>Opady w mm: {{ precipMM}} </li>
                <li>Widoczeność: {{ visibility }} metrów</li>
                <li>Kierunek wiatru: {{ winddir16Point }} </li>
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
        },
        wetherUrl(){
            return `https://wttr.in/${this.$props.location}?format=1`
        },
        recordDate(){
            return (new Date(this.$props.localObsDateTime)).toLocaleString() ?? null
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
    position: relative
}

.current-wheater-body {
    padding: var(--padding-container);
}

.location-name {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    text-transform: capitalize;
}

header {
    background-color: #224F83;
    padding: var(--padding-container);

}

.wheter-badge-info {
    background-color: white;
    overflow: hidden;
    width: 270px;
    transform: translate(30px , -20px);
}

.wheter-badge-info > iframe {
    height: 50px;
    transform: scale(3) translate(95px, 3px); 
}

.slider {
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}

.wheater-information{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 1rem;
}
</style>
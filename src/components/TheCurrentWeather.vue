<template>
    <section class="current-wheather-container">
        <header>
            <div class="location-name">{{  temp_C }}</div>
        </header>

        
    </section>
</template>


<script>

export default {
    props: [
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
}
</script>

<style scoped>
@property --padding-container {
    syntax: 'REM';
    initial-value: 1rem;
}

.current-wheather-container{
    
    color: white;
    background-color: rgba(34, 79, 131, 0.8);
}

header {
    background-color: #224F83;
    padding: var(--padding-container);
    padding-bottom: 0;
}

.location-name {

}

</style>
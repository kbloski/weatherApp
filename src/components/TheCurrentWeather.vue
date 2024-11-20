<template>
    <div>
        <div>Temperatura {{ tempC }}</div>
        <div>Odczuwalna temperatura {{ feelTempC }}</div>
        <div>Promieniowanie UV {{ uvIndex }}</div>
        <div>Zachmurzenie {{ cloudCover  }}</div>
        <div>Wilgotność {{ humidity }}</div>
        <div>Opady w MM {{ precipMM  }}</div>
        <div>Ciśnienie {{ precipMM  }}</div>
        <div>Widoczność {{ visibility  }}</div>
        <div>Kod pogody {{ weatherCode  }}</div>
        <div>Kierunek wiatru w stopniach {{ windDirrectionDegree  }}</div>
        <div>Prędkość wiatru (km/h) {{ windSpeedKmph  }}</div>
    </div>
</template>

<script>
    export default {
        // props: {
        //     tempC: {
        //         type: Number,
        //         // required: true
        //     },
        //     feelTempC:{
        //         type: Number,
        //         // required: true
        //     },  
        //     cloudCover: {
        //         type: Number,
        //         // required: true
        //     },
        //     humidity: {
        //         type: Number,
        //         // required: true
        //     },
        //     precipMM: {
        //         type: Number,
        //         // required: true
        //     },
        //     pressure: {
        //         type: Number,
        //         // required: true,
        //     },
        //     uvIndex: Number,
        //     visibility: Number,
        //     weatherCode: Number,
        //     windDirDegree: String,
        //     windSpeedKmph: Number,

        // },
        props: [ 'tempC', 'feelTempC','cloudCover', 'humidity', 'precipMM',  'pressure', 'uvIndex', 'visibility', 'weatherCode', 'windDirDegree', 'windSpeedKmph']
    }
</script>
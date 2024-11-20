<template>
    <div>
        {{  data }}
        <!-- <div>Temperatura {{ tempC }}</div>
        <div>Odczuwalna temperatura {{ feelTempC }}</div>
        <div>Promieniowanie UV {{ uvIndex }}</div>
        <div>Zachmurzenie {{ cloudCover  }}</div>
        <div>Wilgotność {{ humidity }}</div>
        <div>Opady w MM {{ precipMM  }}</div>
        <div>Ciśnienie {{ precipMM  }}</div>
        <div>Widoczność {{ visibility  }}</div>
        <div>Kod pogody {{ weatherCode  }}</div>
        <div>Kierunek wiatru w stopniach {{ windDirrectionDegree  }}</div>
        <div>Prędkość wiatru (km/h) {{ windSpeedKmph  }}</div> -->
    </div>
</template>

<script>
import { useFetch } from '@/hooks/useFetch';
import { appLanguage } from '@/config';

    export default {
        props: { 
            location: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                fetchWheater: useFetch(`https://wttr.in/${this.location}?format=j2&lang=${appLanguage}`)
            }
        },
        computed: {
            data(){
                return this.fetchWheater.data;
            }

        }
    }
</script>
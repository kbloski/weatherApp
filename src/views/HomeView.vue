<template>
    <base-loading color="white"></base-loading>
    <div class="container">
        <the-search-location v-on:search-submit="onSearch"></the-search-location>
        <the-current-weather 
            v-if="currentLocation"
            :location="currentLocation"
        ></the-current-weather>
    </div>
</template>

<script>
import TheSearchLocation from '../components/TheSearchLocation.vue';
import TheCurrentWeather from '../components/TheCurrentWeather.vue';
import { useFetch } from '../hooks/useFetch.js';

export default { 
    components: {
        TheSearchLocation,
        TheCurrentWeather
    },
    data(){
        return {
            currentLocation: null,
            fetchWheather: useFetch(),
        }
    },

    computed:{
    },
    methods: {
        onSearch( searchValue){
            this.currentLocation = searchValue;

            // const url = `https://wttr.in/${searchValue}?format=j1&lang=${appLanguage}`
            // this.fetchWheather.setNewUrl( url );
            
        }
    }
}
</script>

<style scoped>
.container {
    margin: 1rem;
}
</style>
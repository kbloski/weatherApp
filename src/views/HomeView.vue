<template>
    <div class="container">
        <base-search v-model="enteredSearch" @click-search-button="onSearch">Twoja lokalizacja</base-search>
        <the-current-weather 
            v-if="currentLocation"
            :location="currentLocation"
        ></the-current-weather>
    </div>
</template>

<script>
import TheCurrentWeather from '../components/TheCurrentWeather.vue';
import { useFetch } from '../hooks/useFetch.js';

export default { 
    components: {
        TheCurrentWeather
    },
    data(){
        return {
            enteredSearch: '',
            currentLocation: null,
            fetchWheather: useFetch(),
        }
    },

    computed:{
    },
    methods: {
        onSearch(){
            if(this.enteredSearch) this.currentLocation = this.enteredSearch;

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
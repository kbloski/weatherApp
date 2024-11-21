<template>
    <div class="home-view-container">
        <base-search 
            v-model="enteredSearch" 
            @click-search-button="onSearch"
        >Twoja lokalizacja</base-search>
        <the-current-weather></the-current-weather>
        <pre>
            {{ JSON.stringify(fetchData, null, 4) }}
        </pre>
    </div>
</template>

<script>
import TheCurrentWeather from '../components/TheCurrentWeather.vue';
import { useFetch } from '../hooks/useFetch.js';
import { appLanguage } from '@/config';

export default { 
    components: {
        TheCurrentWeather
    },
    data(){
        return {
            enteredSearch: '',
            currentLocation: null,
            fetchWheather: useFetch("https://wttr.in/Jodłowa?format=j1&lang=$pl"),
            // fetchWheather: useFetch(),
            disableSearch: false
        }
    },
    computed:{
        fetchData(){
            return this.fetchWheather.data
        },
        currentCondidtion(){
            if (this.fetchData) return this.fetchData.current_condition[0]
            return null;
        }
    },
    methods: {
        onSearch(){
            if(this.enteredSearch) this.currentLocation = this.enteredSearch;

            const url = `https://wttr.in/${this.enteredSearch}?format=j1&lang=${appLanguage}`
            this.fetchWheather.setNewUrl( url );
        }
    }
}
</script>

<style scoped>
.home-view-container {
    margin: 1rem;
}
</style>
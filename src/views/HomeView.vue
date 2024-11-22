<template>
    <div class="home-view-container">
        <base-search 
            v-model="enteredSearch" 
            @click-search-button="onSearch"
        >Twoja lokalizacja?</base-search>


        <div v-if="fetchWheather.loading">
            <base-loading></base-loading>
        </div>

        <div v-if="fetchWheather.errorCode">
            {{  fetchWheather.errorCode }}
        </div>
        <div v-else>
            <the-current-weather 
                :location="currentLocation"
                v-bind="currentCondidtion" 
            ></the-current-weather>
        </div>
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
            fetchWheather: useFetch(),
        }
    },
    computed:{
        fetchData(){
            return this.fetchWheather?.data
        },
        currentCondidtion(){
            if (this.fetchData) return this.fetchData.current_condition[0]
            return null;
        }
    },
    created(){
        this.currentLocation = "Polska"
        const url = `https://wttr.in/${this.currentLocation}?format=j1&lang=${appLanguage}`
        if (!this.fetchData) this.fetchWheather.setNewUrl( url )
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
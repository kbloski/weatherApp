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
        <div v-else-if="fetchData">
            <nearest-area-info
                v-bind="nearestArea"
                :currentLocation="currentLocation"
            ></nearest-area-info>
            <the-current-weather 
                :location="currentLocation"
                v-bind="currentCondidtion" 
            ></the-current-weather>
            <next-days-weather
                v-if="weatherForNextDays"
                :weatherList="weatherForNextDays"
            ></next-days-weather>
        </div>
    </div>
</template>

<script>
import TheCurrentWeather from '../components/TheCurrentWeather.vue';
import NearestAreaInfo from '../components/NearestAreaInfo.vue';
import NextDaysWeather from '../components/NextDays/NextDaysWeather.vue';
import { useFetch } from '../hooks/useFetch.js';
import { appLanguage, lastSavedLocationStorageKey } from '../config';

export default { 
    components: {
        TheCurrentWeather,
        NearestAreaInfo,
        NextDaysWeather
    },
    created(){
        this.currentLocation = this.getLastSavedLocation()
        const url = `https://wttr.in/${this.currentLocation}?format=j1&lang=${appLanguage}`
        if (!this.fetchData) this.fetchWheather.setNewUrl( url )
    },
    data(){
        return {
            enteredSearch: '',
            currentLocation: null,
            fetchWheather: useFetch(),
            result: 'result'
        }
    },
    computed:{
        fetchData(){
            return this.fetchWheather?.data
        },
        currentCondidtion(){
            if (!this.fetchData) return null;
            return this.fetchData.current_condition[0]
        },
        nearestArea(){
            if (!this.fetchData) return null;
            return this.fetchData.nearest_area[0]
        },
        weatherForNextDays(){
            if( !this.fetchData) return null;
            return this.fetchData.weather
        }
    },
    methods: {
        getLastSavedLocation(){
            const lastSavedLocation = localStorage.getItem( lastSavedLocationStorageKey );
            if (!lastSavedLocation) return "Warszawa"
            return lastSavedLocation;
        },
        onSearch(){
            if(!this.enteredSearch) return;

            localStorage.setItem( lastSavedLocationStorageKey, this.enteredSearch )
            
            this.currentLocation = this.enteredSearch;
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
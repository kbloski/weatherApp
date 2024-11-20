<template>
    <div>
        <the-search-location v-on:search-submit="onSearch"></the-search-location>
        {{ currentCondition }}        
    </div>
</template>

<script>
import TheSearchLocation from '../components/TheSearchLocation.vue';
import { useFetch } from '../hooks/useFetch.js';

export default { 
    components: {
        TheSearchLocation
    },
    data(){
        return {
            fetchWheather: useFetch()
        }
    },
    computed:{
        currentCondition(){
            return this.fetchWheather.data?.current_condition;
        }

    },
    methods: {
        onSearch( searchValue){
            const url = `https://wttr.in/${searchValue}?format=j1&lang=pl`
            this.fetchWheather.setNewUrl( url );
        }
    }
}
</script>
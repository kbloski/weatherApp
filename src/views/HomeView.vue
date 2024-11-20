<template>
    <div>
        <the-search-location v-on:search-submit="testSearch"></the-search-location>        
    </div>
</template>

<script>
import TheSearchLocation from '@/components/TheSearchLocation.vue';

export default { 
    components: {
        TheSearchLocation
    },
    methods: {
        testSearch( searchValue){
            console.log( searchValue )
        }
    }
}
</script>
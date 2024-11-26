<template>
    <div class="nearest-area-container">
        <span>{{ countryName }} > {{ nearestAreaName }} > {{ currentLocation }}</span>
        <span>Położenie geograficzne: {{ latitude }} / {{ longitude }}</span>
        <span>Zaludnienie: {{ population }} osób</span>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        currentLocation: { required: true},
        areaName: { required: true  },
        country: { required: true },
        latitude: { required: true },
        longitude: { required: true},
        population: { required: true }
    },

    setup( props ){
        const nearestAreaName = computed( 
            () => props.areaName[0].value )
        const countryName = computed(() => props.country[0].value)

        return {
            nearestAreaName,
            countryName
        };
    }
}
</script>

<style lang="css">
.nearest-area-container {
    background-color: white;
    padding: 1rem;
}
.nearest-area-container > span {
    margin-right: 1rem;
}
</style>

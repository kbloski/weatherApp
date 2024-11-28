<template>
    <div class="nearest-area-container">
        <div>
            <span>{{ countryName }} > {{ nearestAreaName }} > {{ currentLocation }}</span>
        </div>
        <div>Położenie geograficzne: {{ latitude }} / {{ longitude }}</div>
        <div>Zaludnienie: {{ population }} osób</div>
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

<style lang="css" scoped>
.nearest-area-container {
    background-color: white;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
}
.nearest-area-container > div {
    margin-right: 1rem;
}
</style>

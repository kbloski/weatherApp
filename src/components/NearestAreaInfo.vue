<template>
    <div>
        {{ countryName }} >
        {{ nearestAreaName }}
        {{ latitude }}
        {{ longitude }}
        {{ population }}
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        areaName: { required: true  },
        country: { required: true },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        },
        population: {
            type: Number,
            required: true
        }
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
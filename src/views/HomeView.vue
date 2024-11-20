<template>
    <div>
        <h2>Home View</h2>
    </div>
</template>

<script>
import { watch, ref, computed } from 'vue';
import { useSimcLocations } from "../hooks/simcLocations";

export default { 
    setup(){
        const simcLocations = useSimcLocations()
        const loading = computed(() => simcLocations.loading.value)
        const errors = computed( () => simcLocations.error.value)
        const locations = ref([])

        watch( [simcLocations.data, simcLocations.loading, simcLocations.error], () => {
            if (loading.value) return;
            if (errors.value) return;

            locations.value = simcLocations.data.value.map( lineList => lineList[6])

        })
 
        return {
            data: [],
            loading: simcLocations.loading,
            errors: simcLocations.error
        }
    }
}
</script>
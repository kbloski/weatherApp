<template>
    <div>
        <h1>Home View</h1>
        {{ data }}
        {{ loading }}
    </div>
</template>

<script>
import { watch } from 'vue';
import { useSimcLocations } from "../hooks/simcLocations";

export default { 
    setup(){
        const simcLocations = useSimcLocations()
        watch( [simcLocations.data], () => {
            console.log('test')
            console.log( simcLocations.loading)
        })
 
        return {
            data: simcLocations.data,
            loading: simcLocations.loading,
            errors: simcLocations.error
        }
    }
}
</script>
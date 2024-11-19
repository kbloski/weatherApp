<template>
    <div>
        <h1>Home View</h1>
        {{ data }}
        {{ loading }}
    </div>
</template>

<script>
import { watch } from 'vue';
import { useSimcLocations } from '../hooks/simcLocations';

export default { 
    setup(){
        const simcAdd = useSimcLocations()
        watch( simcAdd.loading, () => {
            console.log( simcAdd.loading)
        })

        return {
            data: simcAdd.data,
            loading: simcAdd.loading,
            errors: simcAdd.error
        }
    }
}
</script>
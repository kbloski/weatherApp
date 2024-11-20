<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="form-control">
                Search your location <input v-model="inputSearch"></input>
                <button type="submit">Search</button>
            </div>
        </form>
        <!-- <ul v-if="findedLocations.length">
            <li v-for="location in findedLocations">{{ location }}</li>
        </ul> -->
    </div>
</template>


<script>
import { watch, ref, computed } from 'vue';
import { useSimcLocations } from "../hooks/simcLocations";

export default {
        setup(props, ctx){
        // Można dodać zapamiętywanie ostatniej wybranej lokalizacji i ją wyświetlać po wejściu

        const simcLocations = useSimcLocations()
        const loading = computed(() => simcLocations.loading.value)
        const errors = computed( () => simcLocations.error.value)
        const locations = ref([])
        watch( [simcLocations.data, simcLocations.loading, simcLocations.error], () => {
            if (loading.value) return;
            if (errors.value) return;

            const allLocations = simcLocations.data.value.map( lineList => lineList[6])
            locations.value = allLocations.sort();
        })

        const inputSearch = ref('');

        // Można dodać mechanizm szukania
        // const findedLocations = ref([]);
        // watch( inputSearch, () => {
        //     if (!inputSearch.value) return;
        //     findedLocations.value = locations.value.map( name => {
        //         return false;
        //     })
        // });


        function onSubmit(){
            ctx.emit("search-submit", inputSearch.value);
        }
        
 
        return {
            onSubmit,
            inputSearch,
            // findedLocations,
            loading: simcLocations.loading,
            errors: simcLocations.error,

        }
    }
}
</script>
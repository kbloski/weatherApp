import { loadFileFromPublicAsText } from "./loadFilesFromPublic.js";
import { ref, computed, watch } from 'vue';

export function useSimcLocations(){
    const csvFile = loadFileFromPublicAsText("/simc_address_2024.csv");
    const data = computed( () => csvFile.text.value);
    const error = computed( () => csvFile.error.value); 
    const loading = computed( () => csvFile.loading.value);

    const csvLinesData = ref([]);
    watch( [data, loading, error] , () => {
        if (loading.value) return;
        if (error.value) return;
        
        csvLinesData.value = []
        let allTextLines = data.value.split(/\r\n|\n/);
        for( const line of allTextLines){
            const data = line.split(';');
            csvLinesData.value.push( data );
        }
    })

    return {
        data: csvLinesData,
        loading,
        error
    }
}



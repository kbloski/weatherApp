import { loadFileAsText } from "./loadFiles.js";
import { ref, computed, watch } from 'vue';

export function useSimcLocations(){
    const csvFile = loadFileAsText("../../public/simc_address_2024.csv");
    const data = computed( () => csvFile.text);
    const error = computed( () => csvFile.error); 
    const loading = computed( () => csvFile.loading);
    const csvLinesData = ref([]);

    watch( [data, loading, error] , () => {
        if (loading.value) return;
        if (error.value) return;
        
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



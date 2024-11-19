import  path  from 'path';
import fs from "fs";
import { ref } from 'vue';

export function loadFileAsText( pathToFile ){
    const filePath =  path.join(
        import.meta.dirname
        , pathToFile)
    
    const text = ref("");
    const error = ref(null)
    const loading = ref(true)


    fs.readFile( filePath, 'utf-8', (err, inputFileText) => {
        loading.value = false;
        if (err) return error.value = err
        return text.value = inputFileText;
    })
       

    return { text, error, loading }
}
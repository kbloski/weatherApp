import  path  from 'path';
import fs from "fs";

export function loadFileAsText( pathToFile ){
    try {
        const filePath =  path.join(import.meta.dirname, pathToFile)

        const file = fs.readFileSync( filePath, 'utf-8', (err, data) => {
            if (err){
                console.error("Błąd podczas odczytu pliku: ", err)
                return;
            }
            return data;
        })

        return file;
    } catch (err){
        console.error(err)
    }
}
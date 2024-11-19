import { loadFileAsText } from "./loadFiles.js";


const csvAsText = loadFileAsText("../../public/simc_address_2024.csv");
let allTextLines = csvAsText.split(/\r\n|\n/);


let lines = [];
for( const line of allTextLines){
    const data = line.split(';');
    lines.push( data );
}


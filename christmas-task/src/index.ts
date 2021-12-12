import "./scss/style.scss";
import { createToyCard } from "./components/card";
import { arrToys, Itoys } from "./components/example";
import {createSliders} from "./components/sliders";

createSliders();



sortByName(arrToys);


for (let i = 0; i<arrToys.length;i++){
    createToyCard(arrToys, i);
}


function sortByName (arr:Itoys[]){
    arr.sort((a:Itoys,b:Itoys):number=>{
        let textA = a.toyName.toUpperCase();
        let textB = b.toyName.toUpperCase();
        return textA.localeCompare(textB);
    });
}




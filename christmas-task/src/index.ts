import "./scss/style.scss";
import { createToyCard } from "./components/card";
import { arrToys, Itoys } from "./components/example";

// по алфавиту
console.log(arrToys);

sortByName(arrToys);

console.log(arrToys);
// по алфавиту в обратном порядке
/* arrToys.sort(function(a,b){
    let textA = a.toyName.toUpperCase();
    let textB = b.toyName.toUpperCase();
    return textA.localeCompare(textB);
}).reverse(); */



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




import "./scss/style.scss";
import { createToyCard } from "./components/card";
import { arrToys } from "./components/example";
// по алфавиту
console.log(arrToys);
arrToys.sort(function(a,b){
    let textA = a.toyName.toUpperCase();
    let textB = b.toyName.toUpperCase();
    return textA.localeCompare(textB);
});
console.log(arrToys);
// по алфавиту в обратном порядке
arrToys.sort(function(a,b){
    let textA = a.toyName.toUpperCase();
    let textB = b.toyName.toUpperCase();
    return textA.localeCompare(textB);
}).reverse();

console.log(arrToys);

for (let i = 0; i<arrToys.length;i++){
    createToyCard(arrToys, i);
}








import { filt } from "..";
import { arrToys } from "./example";
import { availableForms, isFilterByForm } from "./filter-by-form";
import { availableSizes } from "./filter-by-size";
export let allColors:string[]=['белый', 'желтый', 'красный', 'синий', 'зелёный'];
export let availableColors:string[] =[];
export let isFilterByColor = false;
export function filterByColor (){
const colorContainer = document.getElementById('toys-color-container') as HTMLElement;
const toyColors:HTMLCollection = colorContainer.getElementsByTagName('button'); 
console.log(toyColors);




    for (let i =0; i<toyColors.length; i++){
        toyColors[i].addEventListener('click', ()=>{
            isFilterByColor = true;
            if(!toyColors[i].classList.contains('active-btn')){
                availableColors.push(allColors[i]);
                console.log(availableColors);
            }else{
                const index = availableColors.indexOf(allColors[i]);
                if (index > -1) {
                availableColors.splice(index, 1);
                }   
                }
                 toyColors[i].classList.toggle('active-btn');
                 filt (arrToys, availableForms, availableColors, availableSizes);
        })
    }
    
  };

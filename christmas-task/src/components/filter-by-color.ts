
import { filt, isFilters } from "..";
import { arrToys } from "./example";
import { availableForms} from "./filter-by-form";
import { availableSizes } from "./filter-by-size";
export let allColors:string[]=['белый', 'желтый', 'красный', 'синий', 'зелёный'];
export let availableColors:string[] =[];


const colorContainer = document.getElementById('toys-color-container') as HTMLElement;
const toyColors:HTMLCollection = colorContainer.getElementsByTagName('button');

export function filterByColor (){
    for (let i =0; i<toyColors.length; i++){
        toyColors[i].addEventListener('click', ()=>{
            isFilters.isFilterByColor = true;
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


  export function resetFilterByColor (){
    isFilters.isFilterByColor = false;
    for (let i =0; i<toyColors.length; i++){
            if(toyColors[i].classList.contains('active-btn')){
                toyColors[i].classList.remove('active-btn');
        }
    }
  };
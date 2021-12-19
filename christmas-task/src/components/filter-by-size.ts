
import { filt } from "..";
import { arrToys } from "./example";

import { availableColors } from "./filter-by-color";
import { availableForms } from "./filter-by-form";


export let isFilterBySise = false;
export let availableSizes:string[] =[];
const toySizeContainer = document.getElementById('toys-size') as HTMLElement;
const toySizes: HTMLInputElement[] =[];
toySizes.push(
    document.getElementById('small-size')as HTMLInputElement,
    document.getElementById('average-size') as HTMLInputElement,
    document.getElementById('big-size') as HTMLInputElement
              );
export let allSizes:string[]=['малый', 'средний', 'большой'];

export function filterBySize (){
    for (let i =0; i<toySizes.length; i++){
        toySizes[i].addEventListener('change', ()=>{
            isFilterBySise = true;
            if(toySizes[i].checked){
                availableSizes.push(allSizes[i]);
                console.log(availableSizes);
            }else{
                if (availableSizes.indexOf(allSizes[i]) > -1) {
                availableSizes.splice(availableSizes.indexOf(allSizes[i]), 1);
                }   
            }
            filt (arrToys, availableForms, availableColors, availableSizes);
        })
    }
}
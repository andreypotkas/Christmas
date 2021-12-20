
import { filt, isFilters } from "..";
import { arrToys } from "./example";

import { availableColors } from "./filter-by-color";
import { availableForms } from "./filter-by-form";



export let availableSizes:string[] =[];
if(localStorage.getItem('sizes')){
    availableSizes=(<string>localStorage.getItem('sizes')).split(',');
}
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
        if(localStorage.getItem('sizes')){
            if(availableSizes.includes(allSizes[i])){
                toySizes[i].checked=true;
        }
    }
        toySizes[i].addEventListener('change', ()=>{
           isFilters.isFilterBySise = true;
            if(toySizes[i].checked){
                availableSizes.push(allSizes[i]);
                
            }else{
                if (availableSizes.indexOf(allSizes[i]) > -1) {
                availableSizes.splice(availableSizes.indexOf(allSizes[i]), 1);
                }   
            }
            localStorage.setItem('sizes', `${availableSizes}`);
            filt (arrToys, availableForms, availableColors, availableSizes);
        })
    }
}

export function resetFilterBySize (){
    for (let i =0; i<toySizes.length; i++){
        
           isFilters.isFilterBySise = false;
            if(toySizes[i].checked){
                toySizes[i].checked=false;
            }
    }
}
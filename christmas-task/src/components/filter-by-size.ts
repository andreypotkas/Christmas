
import { available, filt, isFilters } from "..";
import { arrToys } from "./example";


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
            available.sizes=(<string>localStorage.getItem('sizes')).split(',');
            if(available.sizes.includes(allSizes[i])){
                toySizes[i].checked=true;
        }
    }
        toySizes[i].addEventListener('change', ()=>{
           isFilters.isFilterBySise = true;
            if(toySizes[i].checked){
                available.sizes.push(allSizes[i]);
                
            }else{
                if (available.sizes.indexOf(allSizes[i]) > -1) {
                    available.sizes.splice(available.sizes.indexOf(allSizes[i]), 1);
                }   
            }
            localStorage.setItem('sizes', `${available.sizes}`);
            if(available.sizes.length==0){
                isFilters.isFilterBySise=false;
            }
            filt (arrToys, available.forms, available.colors, available.sizes);
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
    isFilters.isFilterBySise=false;
    localStorage.removeItem('sizes')
}
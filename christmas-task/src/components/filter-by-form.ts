
import { arrToys } from "./example";

import { availableColors } from "./filter-by-color";
import { availableSizes } from "./filter-by-size";
import { Itoys } from "./example";
import { container, createToyCard } from "./card";
import {filt, isFilters} from '../index';
export let availableForms:string[] =[];
if(localStorage.getItem('forms')){
    availableForms=(<string>localStorage.getItem('forms')).split(',');
    
}

const toyFormContainer = document.getElementById('toys-form-container') as HTMLElement;
const toyForms:HTMLCollection = toyFormContainer.getElementsByTagName('button'); 
export let allForms:string[]=['колокольчик', 'шар', 'шишка', 'звезда', 'снежинка', 'фигурка'];

export function filterByForm (){
for (let i =0; i<toyForms.length; i++){
    if(localStorage.getItem('forms')){
        if(availableForms.includes(allForms[i])){
            toyForms[i].classList.add('active-btn')
    }
}
    toyForms[i].addEventListener('click', ()=>{
        isFilters.isFilterByForm = true;
        if(!toyForms[i].classList.contains('active-btn')){
            availableForms.push(allForms[i]);
        }else{
            if (availableForms.indexOf(allForms[i]) > -1) availableForms.splice(availableForms.indexOf(allForms[i]), 1);
            }
            filt(arrToys, availableForms, availableColors, availableSizes);
            toyForms[i].classList.toggle('active-btn');
            localStorage.setItem('forms', `${availableForms}`);
    })
  }
}
export function resetFilterByForm (){
    for (let i =0; i<toyForms.length; i++){
            if(toyForms[i].classList.contains('active-btn')){
                toyForms[i].classList.remove('active-btn')
            }
      }
      isFilters.isFilterByForm=false;
    }
/* function filterForm(arr:Itoys[], form:string[]):Itoys[]{
    let filtredArr:Itoys[] = arr.filter(item=>{return form.indexOf(item.toyShape)!=-1});
    container.innerHTML='';
    for (let i = 0; i<filtredArr.length;i++){//create cards on page
        createToyCard(filtredArr, i);
    }
    return filtredArr;
} */
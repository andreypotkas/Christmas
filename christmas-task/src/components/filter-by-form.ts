
import { arrToys } from "./example";




import { container, createToyCard } from "./card";
import {available, filt, isFilters} from '../index';


const toyFormContainer = document.getElementById('toys-form-container') as HTMLElement;
const toyForms:HTMLCollection = toyFormContainer.getElementsByTagName('button'); 
export let allForms:string[]=['колокольчик', 'шар', 'шишка', 'звезда', 'снежинка', 'фигурка'];

export function filterByForm (){
for (let i =0; i<toyForms.length; i++){
    if(localStorage.getItem('forms')){
        available.forms=(<string>localStorage.getItem('forms')).split(',');
        if(available.forms.includes(allForms[i])){
            toyForms[i].classList.add('active-btn')
    }
}
    toyForms[i].addEventListener('click', ()=>{
        isFilters.isFilterByForm = true;
        if(!toyForms[i].classList.contains('active-btn')){
            available.forms.push(allForms[i]);
        }else{
            if (available.forms.indexOf(allForms[i]) > -1) available.forms.splice(available.forms.indexOf(allForms[i]), 1);
            }
            
            toyForms[i].classList.toggle('active-btn');
            localStorage.setItem('forms', `${available.forms}`);
            if(available.forms.length==0){
                isFilters.isFilterByForm=false;
            }
            filt(arrToys, available.forms, available.colors, available.sizes);
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
      localStorage.removeItem('forms');
    }

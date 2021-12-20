
import { available, filt, isFilters } from "..";
import { arrToys } from "./example";

export let allColors:string[]=['белый', 'желтый', 'красный', 'синий', 'зелёный'];


const colorContainer = document.getElementById('toys-color-container') as HTMLElement;
const toyColors:HTMLCollection = colorContainer.getElementsByTagName('button');

export function filterByColor (){
    for (let i =0; i<toyColors.length; i++){
        if(localStorage.getItem('colors')){
            available.colors=(<string>localStorage.getItem('colors')).split(',');
            if((available.colors).includes(allColors[i])){
                toyColors[i].classList.add('active-btn')
        }
    }
        toyColors[i].addEventListener('click', ()=>{
            isFilters.isFilterByColor = true;
            if(!toyColors[i].classList.contains('active-btn')){
                (available.colors).push(allColors[i]);
                
            }else{
                const index = (available.colors).indexOf(allColors[i]);
                if (index > -1) {
                    (available.colors).splice(index, 1);
                }   
                }
                 toyColors[i].classList.toggle('active-btn');
                 localStorage.setItem('colors', `${available.colors}`);
                 if((available.colors).length==0){
                    isFilters.isFilterByColor=false;
                }
                 filt (arrToys, available.forms, available.colors, available.sizes);
        })
    }
    
  };


  export function resetFilterByColor (){
    for (let i =0; i<toyColors.length; i++){
            if(toyColors[i].classList.contains('active-btn')){
                toyColors[i].classList.remove('active-btn');
        }
    }
    isFilters.isFilterByColor=false;
    localStorage.removeItem('colors');
  };
import "./scss/style.scss";
import { createToyCard } from "./components/card";
import { arrToys, Itoys } from "./components/example";
import {createSliders, resetSliders, state} from "./components/sliders";
import { container } from "./components/card"
import { addFavorite, clickCard, favoriteToysCount} from "./components/favorite";
import {sortByCount, sortByName, sortByNameCount} from './components/sorts'
import { allColors, availableColors, filterByColor, resetFilterByColor} from "./components/filter-by-color";
import {allForms, availableForms, filterByForm, resetFilterByForm} from './components/filter-by-form';
import { filterBySize, availableSizes, allSizes, resetFilterBySize} from "./components/filter-by-size";

for (let i = 0; i<arrToys.length;i++){//create cards on page
    createToyCard(arrToys, i);
}

export const isFilters={
  isFilterByForm:false,
  isFilterByColor:false,
  isFilterBySise:false,
}
const resetFiltres = document.getElementById('reset-filters');
resetFiltres?.addEventListener('click', ()=>{
  resetFilterBySize();
  resetFilterByForm();
  resetFilterByColor();
  resetSliders();
  filt (arrToys, availableForms, availableColors, availableSizes);
});

sortByNameCount(arrToys);
filterBySize();
createSliders();
addFavorite();
filterByForm();
filterByColor();

export const favoriteCheck = document.getElementById('toys-favorite') as HTMLInputElement;
favoriteCheck.addEventListener('change', ()=>{
  filt (arrToys, availableForms, availableColors, availableSizes);
})

let availableCheck = [true, false];

export function filt (arr:Itoys[], form:string[], color:string[], size:string[]){
  if(favoriteCheck.checked){
    availableCheck=[true];
  }else if(!favoriteCheck.checked){
    availableCheck=[true, false];
  }
  if(isFilters.isFilterByForm == false){
    form=allForms;
  }
  if(isFilters.isFilterByColor == false){
    color=allColors;
  }
  if(isFilters.isFilterBySise == false){
    size=allSizes;
  }
  let sortArr = arr.filter(item=>{
      return form.includes(item.toyShape)
      && color.includes(item.toyColor)
      && size.includes(item.toySize)
      && Number(item.toyCount)>=state.sliderCountValue.min 
      && Number(item.toyCount)<=state.sliderCountValue.max 
      && Number(item.toyYear)>=state.sliderYearValue.min 
      && Number(item.toyYear)<=state.sliderYearValue.max
      && availableCheck.includes(item.toyFavorite)
    });
      sortByNameCount(sortArr);
container.innerHTML='';
for (let i = 0; i<sortArr.length;i++){
    createToyCard(sortArr, i);
  }
}



/* let sortArray = arr.filter(item=>['shape', 'color', 'size'].every((key)=>{
     if (filters[key].length === 0) return true;
     const keyToy = `toy${key}`
     return filters[key].includes(item[key])
    })) */

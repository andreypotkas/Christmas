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
import { searchInput} from "./components/search";
import { showMessage } from "./components/message";

document.getElementById('clear-search')?.addEventListener('click', ()=>{
  searchInput.value='';
  filt(arrToys, availableForms, availableColors, availableSizes);
})
export let myStorage = window.localStorage;


localStorage.setItem('Sizes', `${availableSizes}`);


for (let i = 0; i<arrToys.length;i++){//create cards on page
    createToyCard(arrToys, i);
}

export const isFilters={
  isFilterByForm:false,
  isFilterByColor:false,
  isFilterBySise:false,
}


sortByNameCount(arrToys);
filterBySize();
createSliders();
addFavorite();
filterByForm();
filterByColor();

let availableCheck = [true, false];

export let favoriteCheck = document.getElementById('toys-favorite') as HTMLInputElement;
if(localStorage.getItem('favorite')=='true'){
    favoriteCheck.checked=true;
}

favoriteCheck.addEventListener('change', ()=>{
  localStorage.setItem('favorite', `${favoriteCheck.checked}`);
  filt (arrToys, availableForms, availableColors, availableSizes);
  
})



export function filt (arr:Itoys[], form:string[], color:string[], size:string[]){
  if(favoriteCheck.checked){
    availableCheck=[true];
  }else if(!favoriteCheck.checked){
    availableCheck=[true, false];
  }
  if(isFilters.isFilterByForm == false && !localStorage.getItem('forms')){
    form=allForms;
  }
  if(isFilters.isFilterByColor == false && !localStorage.getItem('colors')){
    color=allColors;
  }
  if(isFilters.isFilterBySise == false && !localStorage.getItem('sizes')){
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
      && item.toyName.toLowerCase().includes(searchInput.value.toLowerCase())
    });
    if(sortArr.length==0){
      showMessage('Извините, совпадений не обнаружено');
    }
      sortByNameCount(sortArr);
container.innerHTML='';
for (let i = 0; i<sortArr.length;i++){
    createToyCard(sortArr, i);
  }
}

filt (arrToys, availableForms, availableColors, availableSizes);
console.log(availableForms);
console.log(availableColors);
console.log(availableSizes);

/* let sortArray = arr.filter(item=>['shape', 'color', 'size'].every((key)=>{
     if (filters[key].length === 0) return true;
     const keyToy = `toy${key}`
     return filters[key].includes(item[key])
    })) */

// сброс фильтров
    const resetFiltres = document.getElementById('reset-filters');
    resetFiltres?.addEventListener('click', ()=>{
      resetFilterBySize();
      resetFilterByForm();
      resetFilterByColor();
      resetSliders();
      favoriteCheck.checked=false;
      filt (arrToys, availableForms, availableColors, availableSizes);
    });

// сброс настроек всех    
export const resetSettings = document.getElementById('reset-settings');
resetSettings?.addEventListener('click',()=>{
  localStorage.clear();
  resetFilterBySize();
  resetFilterByForm();
  resetFilterByColor();
  resetSliders();
  favoriteCheck.checked=false;
  filt (arrToys, availableForms, availableColors, availableSizes);
})

  
searchInput.addEventListener('keydown', ()=>{
  filt(arrToys, availableForms, availableColors, availableSizes);
});
import "./scss/style.scss";
import { createToyCard } from "./components/card";
import { arrToys, Itoys } from "./components/example";
import {createSliders, resetSliders, state} from "./components/sliders";
import { container } from "./components/card"
import { addFavorite, filterByFavorite} from "./components/favorite";
import {sortByNameCount} from './components/sorts'
import { allColors, filterByColor, resetFilterByColor} from "./components/filter-by-color";
import {allForms, filterByForm, resetFilterByForm} from './components/filter-by-form';
import { filterBySize, allSizes, resetFilterBySize} from "./components/filter-by-size";
import { showMessage } from "./components/message";
import { filterBySearch } from "./components/search";
import { addButtonsOnPage } from "./components/start-page";

export let myStorage = window.localStorage;

export const constant ={
  searchInput: document.getElementById('search-input') as HTMLInputElement,
  clearSearch: document.getElementById('clear-search') as HTMLElement,
  favoriteCheck: document.getElementById('toys-favorite') as HTMLInputElement,
  resetFiltres: document.getElementById('reset-filters') as HTMLElement,
  resetSettings: document.getElementById('reset-settings') as HTMLElement,
  favoriteCount: 0,
  favoriteToysCount: document.getElementById('favorite-toys-count') as HTMLElement,
  sortList: document.getElementById('sort-list') as HTMLSelectElement,
  chosenToys:[] as string[],
  //
  startPageBtn: document.getElementById('start-page-btn') as HTMLButtonElement,
  toyPageBtn: document.getElementById('toys-page-btn') as HTMLButtonElement,
  treePageBtn: document.getElementById('tree-page-btn') as HTMLButtonElement,
  startPage: document.getElementById('start') as HTMLElement,
  toyPage: document.getElementById('toys') as HTMLElement,
  treePage: document.getElementById('tree') as HTMLElement,
  treeToysContainer:document.getElementById('tree-toys-toys') as HTMLElement,
}

if(localStorage.getItem('chosenToys')){
  constant.chosenToys=(<string>localStorage.getItem('chosenToys')).split(',');
}

export const isFilters:{
  isFilterByForm:boolean;
  isFilterByColor:boolean;
  isFilterBySise:boolean;
}={
  isFilterByForm:false,
  isFilterByColor:false,
  isFilterBySise:false,
}
export const available:{
  colors:string[];
  forms:string[];
  sizes:string[];
  check:boolean[]
}={
  colors:[],
  forms:[],
  sizes:[],
  check:[true, false]
}
addButtonsOnPage();
filterByFavorite();
filterBySearch();
filterBySize();
createSliders();
addFavorite();
filterByForm();
filterByColor();
sortByNameCount();

export function filt (arr:Itoys[], form:string[], color:string[], size:string[]){
  
  if(constant.favoriteCheck.checked || localStorage.getItem('favorite')=='true'){
    available.check=[true];
    constant.favoriteCheck.checked=true;
  }else if(!constant.favoriteCheck.checked){
    available.check=[true, false];
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
      && available.check.includes(item.toyFavorite)
      && item.toyName.toLowerCase().includes(constant.searchInput.value.toLowerCase())
    });
    if(sortArr.length==0){
      showMessage('Извините, совпадений не обнаружено');
    }
    createCardsOnPage(sortArr);
}


filt (arrToys, available.forms, available.colors, available.sizes);



// сброс фильтров
   
   constant.resetFiltres.addEventListener('click', ()=>{
      resetFilterBySize();
      resetFilterByForm();
      resetFilterByColor();
      resetSliders();
      constant.favoriteCheck.checked=false;
      filt (arrToys, available.forms, available.colors, available.sizes);
    });

// сброс настроек всех    

  constant.resetSettings.addEventListener('click',()=>{
  constant.sortList.selectedIndex=0;
  localStorage.clear();
  resetFilterBySize();
  resetFilterByForm();
  resetFilterByColor();
  resetSliders();
  constant.favoriteCheck.checked=false;
  constant.favoriteCount=0;
  constant.favoriteToysCount.innerHTML='0';
  filt (arrToys, available.forms, available.colors, available.sizes);
})

function createCardsOnPage(arr:Itoys[]):void{
  container.innerHTML='';
  for (let i = 0; i<arr.length;i++){
    createToyCard(arr, i);
  }
}







/* let sortArray = arr.filter(item=>['shape', 'color', 'size'].every((key)=>{
     if (filters[key].length === 0) return true;
     const keyToy = `toy${key}`
     return filters[key].includes(item[key])
    })) */
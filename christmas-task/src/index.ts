import "./scss/style.scss";

import { arrToys } from "./components/toy/create-arr-toys";
import {createSliders, resetSliders, state} from "./components/toy/slider/sliders";
import { addButtonsOnPage } from "./components/start-page/start-page";
import { tree } from "./components/tree/class-tree";
import { toys } from "./components/toy/class-toy";

export let myStorage = window.localStorage;
export const constant ={
  searchInput: document.getElementById('search-input') as HTMLInputElement,
  clearSearch: document.getElementById('clear-search') as HTMLElement,
  favoriteCheck: document.getElementById('toys-favorite') as HTMLInputElement,
  resetFiltres: document.getElementById('reset-filters') as HTMLElement,
  resetSettings: document.getElementById('reset-settings') as HTMLElement,
  favoriteCount: 0,
  favoriteToysCount: document.getElementById('favorite-toys-count') as HTMLElement,
  chosenToys:[] as string[],
  //
  playBtn: document.getElementById('start-play') as HTMLButtonElement,
  startPageBtn: document.getElementById('start-page-btn') as HTMLButtonElement,
  toyPageBtn: document.getElementById('toys-page-btn') as HTMLButtonElement,
  treePageBtn: document.getElementById('tree-page-btn') as HTMLButtonElement,
  startPage: document.getElementById('start') as HTMLElement,
  toyPage: document.getElementById('toys') as HTMLElement,
  treePage: document.getElementById('tree') as HTMLElement,
  treeToysContainer:document.getElementById('tree-toys-toys') as HTMLElement,
  selectTreeContainer: document.getElementById('tree-settings-select-tree') as HTMLElement,
  selectBgContainer: document.getElementById('tree-settings-bg') as HTMLElement,

}

if(localStorage.getItem('chosenToys')){
  constant.chosenToys=(<string>localStorage.getItem('chosenToys')).split(',');
}

addButtonsOnPage();
tree.createLightropeBtn();
tree.addTypeTrees();
tree.addTypeBg();
tree.snowAndVolume();
toys.filterByFavorite();
toys.filterBySearch();
toys.addChosen();
toys.filterByColor();
toys.filterByForm();
toys.filterBySize();
toys.sortByNameCount(); 
createSliders();


toys.filt(arrToys, toys.available.forms, toys.available.colors, toys.available.sizes); 

constant.resetFiltres.addEventListener('click', ()=>{
    toys.resetFilters();
});

constant.resetSettings.addEventListener('click',()=>{
  toys.resetSettings();
})
 




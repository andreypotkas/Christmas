import "./scss/style.scss";

import { arrToys } from "./components/toy/create-arr-toys";
import {createSliders} from "./components/toy/slider/sliders";
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
addButtonsOnPage();
createSliders();
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
toys.initEvents();
toys.filt(arrToys, toys.available.forms, toys.available.colors, toys.available.sizes); 

console.log(
  `
  Здравствуйте! С Наступающим Вас Новым Годом! Желаю Вам в новом году удачи, успехов в учебе и стать Front-End Developer !))
  Выполнены все требования кроме:
  выбранные настройки сохраняются в local storage и отображаются при перезагрузке страницы. Если музыка сохранилась включённой, она начинает играть при первом клике. Есть кнопка сброса настроек, которая очищает local storage +10
  когда игрушку "вешают на ёлку" количество игрушек в слоте уменьшается, когда игрушку "снимают с ёлки", количество игрушек в слоте увеличивается, когда все экземпляры игрушки помещаются на ёлку, отображается пустой слот +10

  Итого: 200 -20 = 180 
`
);



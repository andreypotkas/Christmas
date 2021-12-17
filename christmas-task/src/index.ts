import "./scss/style.scss";
import { createToyCard } from "./components/card";
import { arrToys, Itoys } from "./components/example";
import {createSliders} from "./components/sliders";
import { container } from "./components/card"
import { clickCard, favoriteToysCount} from "./components/favorite";
import {sortByCount, sortByName} from './components/sorts'

createSliders();//create sliders years and count

for (let i = 0; i<arrToys.length;i++){//create cards on page
    createToyCard(arrToys, i);
}



//favorite
let favoriteToys:Itoys[] =arrToys.filter((e:Itoys) => e.toyFavorite==true);
let favoriteCount:number =favoriteToys.length;
favoriteToysCount.innerHTML=`${favoriteCount}`;
container.onclick = function(event:Event):void {
    let target = event.target as HTMLElement; 
    if (target.classList.contains('toy-card-title') || target.classList.contains('toy-card-description') || target.classList.contains('toy-card-img')){
      favoriteCount=Number(favoriteToysCount.textContent);  
      clickCard(target, favoriteToysCount, favoriteCount);
    };
  };

  
  let sortList = document.getElementById('sort-list') as HTMLSelectElement;
  sortList?.addEventListener('change', function():void{
    container.innerHTML='';
    if(sortList.selectedIndex==0){
        sortByName(arrToys);
    } else if (sortList.selectedIndex==1){
      sortByName(arrToys);
      arrToys.reverse();
    } else if (sortList.selectedIndex==2) {
      sortByCount(arrToys);
    } else if (sortList.selectedIndex==3){
        sortByCount(arrToys);
        arrToys.reverse();
    }
    for (let i = 0; i<arrToys.length;i++){//create cards on page
        createToyCard(arrToys, i);
    }
  });
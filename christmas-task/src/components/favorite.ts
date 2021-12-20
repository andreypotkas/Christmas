import { arrToys } from "./example";
import { Itoys } from "./example";
import { container } from "./card";
import { favoriteCheck, filt, resetSettings } from "..";
import { showMessage } from "./message";
import { availableForms } from "./filter-by-form";
import { availableColors } from "./filter-by-color";
import { availableSizes } from "./filter-by-size";
export let favoriteToysCount = document.getElementById('favorite-toys-count') as HTMLElement;

export let favoriteCount:number =0;

export function addFavorite(){
if (localStorage.getItem('favor')){
  favoriteCount=Number(localStorage.getItem('favor'));
}
favoriteToysCount.innerHTML=`${favoriteCount}`;
container.onclick = function(event:Event):void {
    let target = event.target as HTMLElement; 
    if (target.classList.contains('toy-card-title') || target.classList.contains('toy-card-description') || target.classList.contains('toy-card-img')){
      favoriteCount=Number(favoriteToysCount.textContent);  
      clickCard(target, favoriteToysCount, favoriteCount);
    };
  };

}

export function clickCard(target:HTMLElement, favoriteToysCount:HTMLElement, favoriteCount:number):void{
    if(target.querySelector('.favorite-check')?.classList.contains('hide')){
      
        if(favoriteCount>=20){
          showMessage('Извините, все слоты заполнены');
        }else{
          favoriteCount++;
          
          target.querySelector('.favorite-check')?.classList.remove('hide');
        }
    }else if(target.querySelector('.favorite-check')?.classList.contains('favorite-check')){
        target.querySelector('.favorite-check')?.classList.add('hide');
        favoriteCount--;
    }
    localStorage.setItem('favor', `${favoriteCount}`)
    favoriteToysCount.innerHTML=`${favoriteCount}`;
  }

  resetSettings?.addEventListener('click',()=>{
    favoriteCount=0;
    favoriteToysCount.innerHTML=`${favoriteCount}`;
    filt(arrToys, availableForms, availableColors, availableSizes);
  })
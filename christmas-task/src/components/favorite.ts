import { arrToys } from "./example";
import { Itoys } from "./example";
import { container } from "./card";
import { favoriteCheck } from "..";
import { showMessage } from "./message";
export let favoriteToysCount = document.getElementById('favorite-toys-count') as HTMLElement;

export function addFavorite(){

let favoriteCount:number =0;
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
      
        if(favoriteCount>=2){
          showMessage('Извините, все слоты заполнены');
        }else{
          favoriteCount++;
          target.querySelector('.favorite-check')?.classList.remove('hide');
        }
    }else if(target.querySelector('.favorite-check')?.classList.contains('favorite-check')){
        target.querySelector('.favorite-check')?.classList.add('hide');
        favoriteCount--;
    }
    favoriteToysCount.innerHTML=`${favoriteCount}`;
  }


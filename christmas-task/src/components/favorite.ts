import { arrToys } from "./example";
import { Itoys } from "./example";
import { container } from "./card";
export let favoriteToysCount = document.getElementById('favorite-toys-count') as HTMLElement;

export function addFavorite(){
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

}

export function clickCard(target:HTMLElement, favoriteToysCount:HTMLElement, favoriteCount:number):void{
    if(target.querySelector('.favorite-check')?.classList.contains('hide')){
        target.querySelector('.favorite-check')?.classList.remove('hide');
        favoriteCount++;
    }else if(target.querySelector('.favorite-check')?.classList.contains('favorite-check')){
        target.querySelector('.favorite-check')?.classList.add('hide');
        favoriteCount--;
    }
    favoriteToysCount.innerHTML=`${favoriteCount}`;
  }
export const favoriteCheck = document.getElementById('toys-favorite') as HTMLInputElement;

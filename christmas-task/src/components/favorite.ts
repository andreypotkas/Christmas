import { arrToys } from "./example";
import { Itoys } from "./example";
export let favoriteToysCount = document.getElementById('favorite-toys-count') as HTMLElement;

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
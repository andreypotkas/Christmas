import data from "./data";
import { toy } from "./data";
import {Itoys} from './example'
import { arrToys } from "./example";
import { container } from "./card";
import { createToyCard } from "./card";
  


  export function sortByName (arr:Itoys[]){
    arr.sort((a:Itoys,b:Itoys):number=>{
        let textA = a.toyName.toUpperCase();
        let textB = b.toyName.toUpperCase();
        return textA.localeCompare(textB);
    });
}

export function sortByCount (arr:Itoys[]){
    arr.sort((a:Itoys,b:Itoys):number=>Number(a.toyCount)-Number(b.toyCount));
}

let sortList = document.getElementById('sort-list') as HTMLSelectElement;
export function sortByNameCount (arr:Itoys[]){
sortList?.addEventListener('change', function():void{
    container.innerHTML='';
    if(sortList.selectedIndex==0){
        sortByName(arr);
    } else if (sortList.selectedIndex==1){
      sortByName(arr);
      arr.reverse();
    } else if (sortList.selectedIndex==2) {
      sortByCount(arr);
    } else if (sortList.selectedIndex==3){
        sortByCount(arr);
        arr.reverse();
    }
    for (let i = 0; i<arr.length;i++){//create cards on page
        createToyCard(arr, i);
    }
  });
}
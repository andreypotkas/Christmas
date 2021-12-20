import {Itoys} from './example'
import { arrToys } from "./example";
import { available, constant, filt, myStorage } from "..";

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

export function sortByNameCount (){
  if(localStorage.getItem('selectedIndex')){
    constant.sortList.selectedIndex=Number(localStorage.getItem('selectedIndex'));
  }
  constant.sortList.addEventListener('change', function():void{
    if(constant.sortList.selectedIndex==0){
        sortByName(arrToys);
    } else if (constant.sortList.selectedIndex==1){
      sortByName(arrToys);
      arrToys.reverse();
    } else if (constant.sortList.selectedIndex==2) {
      sortByCount(arrToys);
    } else if (constant.sortList.selectedIndex==3){
        sortByCount(arrToys);
        arrToys.reverse();
    }
    localStorage.setItem('selectedIndex', `${constant.sortList.selectedIndex}`);
    filt(arrToys, available.forms, available.colors, available.sizes);
  });
}


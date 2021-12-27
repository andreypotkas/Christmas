import {Itoys} from './create-arr-toys'
import { arrToys } from "./create-arr-toys";
import { toys } from './class-toy';

class Sort{
  arr:Itoys[];
  sortList:HTMLSelectElement;
  constructor(
    arr:Itoys[]=arrToys,
    sortList= document.getElementById('sort-list') as HTMLSelectElement,
    ){
    this.arr=arr;
    this.sortList=sortList;
  }
  
  sort (){
    if(localStorage.getItem('selectedIndex')){
      this.sortList.selectedIndex=Number(localStorage.getItem('selectedIndex'));
    }
    this.sortList.addEventListener('change', ()=>{
      if(this.sortList.selectedIndex==0){
          Sort.byName(arrToys);
      } else if (this.sortList.selectedIndex==1){
        Sort.byName(arrToys);
        arrToys.reverse();
      } else if (this.sortList.selectedIndex==2) {
        Sort.byCount(arrToys);
      } else if (this.sortList.selectedIndex==3){
          Sort.byCount(arrToys);
          arrToys.reverse();
      }
      localStorage.setItem('selectedIndex', `${this.sortList.selectedIndex}`);
      toys.filt(arrToys, toys.available.forms, toys.available.colors, toys.available.sizes);
    })
  }

  static byName (arr:Itoys[]){
      arr.sort((a:Itoys,b:Itoys):number=>{
          let textA = a.toyName.toUpperCase();
          let textB = b.toyName.toUpperCase();
          return textA.localeCompare(textB);
      });
  }

  static byCount (arr:Itoys[]){
    arr.sort((a:Itoys,b:Itoys):number=>Number(a.toyCount)-Number(b.toyCount));
  }
}

export let sort = new Sort();
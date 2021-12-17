import data from "./data";
import { toy } from "./data";
import {Itoys} from './example'

  


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
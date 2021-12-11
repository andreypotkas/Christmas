import { toy } from "./data";
import data from "./data";

export interface Itoys {
  toyImg:string;
  toyName:string;
  toyCount:string;
  toyYear:string;
  toyShape:string;
  toyColor:string;
  toySize:string;
  toyFavorite:boolean;
}

export class toys{
  toyImg:string;
  toyName:string;
  toyCount:string;
  toyYear:string;
  toyShape:string;
  toyColor:string;
  toySize:string;
  toyFavorite:boolean;
  constructor(img:string, name:string, count:string, year:string, shape:string, color:string, size:string, favorite:boolean){
    this.toyImg =img;
    this.toyName=name;
    this.toyCount=count;
    this.toyYear=year;
    this.toyShape=shape;
    this.toyColor=color;
    this.toySize=size;
    this.toyFavorite=favorite;
  }
}


export let arrToys:Array<Itoys>=[];

for (let i = 0; i<data.length; i++ ){
  let example:Itoys = new toys(`url('../assets/toys/${i+1}.webp')`, data[i].name, data[i].count, data[i].year, data[i].shape, data[i].color, data[i].size, data[i].favorite);
  arrToys.push(example);
} 

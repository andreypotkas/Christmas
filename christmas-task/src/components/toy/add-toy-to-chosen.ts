import { arrToys} from "./create-arr-toys";
import {constant} from "../..";
import { showMessage } from "./show-message";





export function addToytoChosen(target:HTMLElement, favoriteToysCount:HTMLElement, favoriteCount:number):void{
  if(localStorage.getItem('chosenToys')){
    constant.chosenToys=(<string>localStorage.getItem('chosenToys')).split(',');
  }
  //если не выбрана - добавить
    if(target.querySelector('.favorite-check')?.classList.contains('hide')){
        if(constant.favoriteCount>=20){
          showMessage('Извините, все слоты заполнены');
        }else{
          constant.favoriteCount++;
          target.querySelector('.favorite-check')?.classList.remove('hide');
          let chosenToy = arrToys.filter(item=>item.toyName==(<Node>(<HTMLElement>target.parentNode).firstChild).textContent);
          console.log(chosenToy);
          constant.chosenToys.push(chosenToy[0].toyName); 
          localStorage.setItem('chosenToys', `${constant.chosenToys}`)
        }
        // если выбрана - удалить
    }else if(target.querySelector('.favorite-check')?.classList.contains('favorite-check')){
        target.querySelector('.favorite-check')?.classList.add('hide');
        constant.favoriteCount--;
        let chosenToy = arrToys.filter(item=>item.toyName==(<Node>(<HTMLElement>target.parentNode).firstChild).textContent);
        constant.chosenToys =constant.chosenToys.filter(item=>item!=(<Node>(<HTMLElement>target.parentNode).firstChild).textContent); 
        localStorage.setItem('chosenToys', `${constant.chosenToys}`);
    }
    localStorage.setItem('favor', `${constant.favoriteCount}`)
    constant.favoriteToysCount.innerHTML=`${constant.favoriteCount}`;
    
}


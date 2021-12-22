import { arrToys, Itoys } from "./example";
import { container } from "./card";
import { available, constant, filt} from "..";
import { showMessage } from "./message";


export function addFavorite(){
if (localStorage.getItem('favor')){
  constant.favoriteCount=Number(localStorage.getItem('favor'));
}
constant.favoriteToysCount.innerHTML=`${constant.favoriteCount}`;


container.onclick = function(event:Event):void {
    let target = event.target as HTMLElement; 
    if (target.classList.contains('toy-card-img')){
      constant.favoriteCount=Number(constant.favoriteToysCount.textContent);  
      clickCard(target, constant.favoriteToysCount, constant.favoriteCount);
    };
  };

}

export function clickCard(target:HTMLElement, favoriteToysCount:HTMLElement, favoriteCount:number):void{
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

export function filterByFavorite(){
      constant.favoriteCheck.addEventListener('change', ()=>{
      localStorage.setItem('favorite', `${constant.favoriteCheck.checked}`);
      filt (arrToys, available.forms, available.colors, available.sizes);
    })
  }
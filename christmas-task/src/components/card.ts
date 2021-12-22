import { constant } from '..';
import { arrToys} from './example';
import { Itoys } from './example';

export const container = document.querySelector('.toys-container-cards') as HTMLElement;

export function createToyCard(data:Array<Itoys>, num:number){
 
  const toyCard = createEl('div','toy-card');
  const toyCardImg = createEl('div', 'toy-card-img');
  const toyCardTitle = createEl('div', 'toy-card-title');
  const toyCardDescription = createEl('div', 'toy-card-description');
  
  let favoriteCheckImg = new Image();
  favoriteCheckImg.src='../assets/1f499.png';
  favoriteCheckImg.classList.add('favorite-check');
  favoriteCheckImg.classList.add('hide');
  toyCardImg.style.background=`url('${data[num].toyImg}')`;
  toyCardImg.style.backgroundRepeat=`no-repeat`;
  toyCardImg.style.backgroundSize='contain';
  toyCardTitle.innerHTML=`${data[num].toyName}`;
  
  if(data[num].toyFavorite===true){
    toyCardDescription.innerHTML=
    `
    <p>количество:${data[num].toyCount}</p>
    <p>год покупки:${data[num].toyYear}</p>
    <p>форма игрушки:${data[num].toyShape}</p>
    <p>цвет игрушки:${data[num].toyColor}</p>
    <p>размер игрушки:${data[num].toySize}</p>
    <p>любимая: да</p>
    `
  } else{
    toyCardDescription.innerHTML=
    `
    <p>количество:${data[num].toyCount}</p>
    <p>год покупки:${data[num].toyYear}</p>
    <p>форма игрушки:${data[num].toyShape}</p>
    <p>цвет игрушки:${data[num].toyColor}</p>
    <p>размер игрушки:${data[num].toySize}</p>
    <p>любимая: нет</p>
    `
  }
  
  if(localStorage.getItem('chosenToys')){
    let chosenToysNames = (<string>localStorage.getItem('chosenToys')).split(',');
      if(chosenToysNames.includes(data[num].toyName)){
        favoriteCheckImg.classList.remove('hide');
      }
  }

    container.append(toyCard);
    toyCard.append(toyCardTitle);
    toyCard.append(toyCardImg);
    toyCard.append(toyCardDescription);
    toyCardImg.append(favoriteCheckImg);
    
}

export function createEl (tagName:string, classAdd:string):HTMLElement{
  const el = document.createElement(tagName);
  el.classList.add(classAdd);
  return el;
}
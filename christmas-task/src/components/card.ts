import { arrToys} from './example';
import { Itoys } from './example';

export const container = document.querySelector('.toys-container-cards') as HTMLElement;

export function createToyCard(data:Array<Itoys>, num:number){
  const toyCard = createEl('div','toy-card');
  const toyCardImg = createEl('div', 'toy-card-img');
  const toyCardTitle = createEl('div', 'toy-card-title');
  const toyCardDescription = createEl('div', 'toy-card-description');
  const favoriteCheck = new Image();
  favoriteCheck.src='../assets/1f499.png';
  favoriteCheck.classList.add('favorite-check');
  if(!arrToys[num].toyFavorite==true){
    favoriteCheck.classList.add('hide');
  }
  toyCardImg.style.background=`${arrToys[num].toyImg}`;
  toyCardImg.style.backgroundRepeat=`no-repeat`;
  toyCardImg.style.backgroundSize='contain';
  toyCardTitle.innerHTML=`${arrToys[num].toyName}`;
    toyCardDescription.innerHTML=
    `
    <p>количество:${arrToys[num].toyCount}</p>
    <p>год покупки:${arrToys[num].toyYear}</p>
    <p>форма игрушки:${arrToys[num].toyShape}</p>
    <p>цвет игрушки:${arrToys[num].toyColor}</p>
    <p>размер игрушки:${arrToys[num].toySize}</p>
    <p>любимая:${arrToys[num].toyFavorite}</p>
    `
    container.append(toyCard);
    toyCard.append(toyCardTitle);
    toyCard.append(toyCardImg);
    toyCard.append(toyCardDescription);
    toyCardImg.append(favoriteCheck);
}

function createEl (tagName:string, classAdd:string):HTMLElement{
  const el = document.createElement(tagName);
  el.classList.add(classAdd);
  return el;
}
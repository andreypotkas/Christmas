import { arrToys} from './example';
import { Itoys } from './example';

const container = document.querySelector('.toys-container-cards') as HTMLElement;

export function createToyCard(data:Array<Itoys>, num:number){
  const toyCard = createEl('div','toy-card');
  const toyCardImg = createEl('div', 'toy-card-img');
  const toyCardTitle = createEl('div', 'toy-card-title');
  const toyCardDescription = createEl('div', 'toy-card-description');
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
}

function createEl (tagName:string, classAdd:string):HTMLElement{
  const el = document.createElement(tagName);
  el.classList.add(classAdd);
  return el;
}
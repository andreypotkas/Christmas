
import data from './data'
import { toy } from './data';
const container = document.querySelector('.toys-container-cards') as HTMLElement;

export function createToyCard(data:Array<toy>, num:number){
  const toyCard = createEl('div','toy-card');
  const toyCardImg = createEl('div', 'toy-card-img');
  const toyCardTitle = createEl('div', 'toy-card-title');
  const toyCardDescription = createEl('div', 'toy-card-description');
  toyCardImg.style.background=`url('../assets/toys/${num}.webp')`;
  toyCardImg.style.backgroundRepeat=`no-repeat`;
  toyCardImg.style.backgroundSize='contain';
  toyCardTitle.innerHTML=`${data[num].name}`;
    toyCardDescription.innerHTML=
    `
    <p>количество:${data[num].count}</p>
    <p>год покупки:${data[num].year}</p>
    <p>форма игрушки:${data[num].shape}</p>
    <p>цвет игрушки:${data[num].color}</p>
    <p>размер игрушки:${data[num].size}</p>
    <p>любимая:${data[num].favorite}</p>
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
import {constant} from "../../index";
import { addToytoChosen } from "./add-toy-to-chosen";
import { showMessage } from "./show-message";
import { resetSliders, state } from "./slider/sliders";
import { sort } from "./sort";
import { arrToys, Itoys } from "./create-arr-toys";

export interface available{
    colors:string[];
    forms:string[];
    sizes:string[];
    check:boolean[]
}
export interface isFilters{
    isFilterByForm:boolean;
    isFilterByColor:boolean;
    isFilterBySise:boolean;
}


class Toys {
    toys:Itoys[];
    allColors:string[];
    allForms:string[];
    toyColors:HTMLCollection;
    toyForms:HTMLCollection;
    available:available;
    isFilters:isFilters;
    allSizes:string[];
    toySizes: HTMLInputElement[];
    container:HTMLElement;
    constructor(
        container=document.querySelector('.toys-container-cards') as HTMLElement,
        toys:Itoys[]=arrToys,
        allColors:string[]=['белый', 'желтый', 'красный', 'синий', 'зелёный'],
        allForms:string[]=['колокольчик', 'шар', 'шишка', 'звезда', 'снежинка', 'фигурка'],
        toyColors:HTMLCollection = (<HTMLElement>document.getElementById('toys-color-container')).getElementsByTagName('button'),
        toyForms:HTMLCollection= (<HTMLElement>document.getElementById('toys-form-container')).getElementsByTagName('button'),
        toySizes: HTMLInputElement[] =[
            document.getElementById('small-size')as HTMLInputElement,
            document.getElementById('average-size') as HTMLInputElement,
            document.getElementById('big-size') as HTMLInputElement
        ],
        allSizes:string[]=['малый', 'средний', 'большой'],
        available={
            colors:[], forms:[], sizes:[], check:[true, false]
          },
        isFilters={
            isFilterByForm:false,
            isFilterByColor:false,
            isFilterBySise:false,
          }
        ){
        this.container=container;
        this.toys=arrToys;
        this.allColors=allColors;
        this.allForms=allForms;
        this.toyColors=toyColors;
        this.toyForms=toyForms;
        this.toySizes=toySizes;
        this.available=available;
        this.allSizes=allSizes;
        this.isFilters=isFilters;
    }

    createCardsOnPage(arr:Itoys[]){
        this.container.innerHTML='';
        for (let i = 0; i<arr.length;i++){
          this.createToyCard(arr, i);
        }
      }
     
    resetSettings(){
        sort.sortList.selectedIndex=0;
        localStorage.clear();
        toys.resetFilterBySize();
        toys.resetFilterByForm();
        toys.resetFilterByColor();
        resetSliders();
        constant.favoriteCheck.checked=false;
        constant.favoriteCount=0;
        constant.favoriteToysCount.innerHTML='0';
        toys.filt(arrToys, toys.available.forms, toys.available.colors, toys.available.sizes);
    }  

    resetFilters(){
        toys.resetFilterBySize();
        toys.resetFilterByForm();
        toys.resetFilterByColor();
        resetSliders();
        constant.favoriteCheck.checked=false;
        this.filt(arrToys, this.available.forms, this.available.colors, this.available.sizes);
    }

    filt (arr:Itoys[], form:string[], color:string[], size:string[]):void{
        if(constant.favoriteCheck.checked || localStorage.getItem('favorite')=='true'){
          this.available.check=[true];
          constant.favoriteCheck.checked=true;
        }else if(!constant.favoriteCheck.checked){
          this.available.check=[true, false];
        }
        if(this.isFilters.isFilterByForm == false && !localStorage.getItem('forms')){
          form=this.allForms;
        }
        if(this.isFilters.isFilterByColor == false && !localStorage.getItem('colors')){
          color=this.allColors;
        }
        if(this.isFilters.isFilterBySise == false && !localStorage.getItem('sizes')){
          size=this.allSizes;
        }
        let sortArr = arr.filter(item=>{
            return form.includes(item.toyShape)
            && color.includes(item.toyColor)
            && size.includes(item.toySize)
            && Number(item.toyCount)>=state.sliderCountValue.min 
            && Number(item.toyCount)<=state.sliderCountValue.max 
            && Number(item.toyYear)>=state.sliderYearValue.min 
            && Number(item.toyYear)<=state.sliderYearValue.max
            && toys.available.check.includes(item.toyFavorite)
            && item.toyName.toLowerCase().includes(constant.searchInput.value.toLowerCase())
          });
          if(sortArr.length==0){
            showMessage('Извините, совпадений не обнаружено');
          }
          this.createCardsOnPage(sortArr);
    }

    filterByFavorite(){
        constant.favoriteCheck.addEventListener('change', ()=>{
        localStorage.setItem('favorite', `${constant.favoriteCheck.checked}`);
        toys.filt(arrToys, toys.available.forms, toys.available.colors, toys.available.sizes);
      })
    }

    addChosen(){
        if (localStorage.getItem('favor')){
          constant.favoriteCount=Number(localStorage.getItem('favor'));
        }
        constant.favoriteToysCount.innerHTML=`${constant.favoriteCount}`;
        toys.container.onclick = function(event:Event):void {
            let target = event.target as HTMLElement; 
            if (target.classList.contains('toy-card-img')){
              constant.favoriteCount=Number(constant.favoriteToysCount.textContent);  
              addToytoChosen(target, constant.favoriteToysCount, constant.favoriteCount);
            };
          };
        
    }

    createEl(tagName:string, classAdd:string):HTMLElement{
      const el:HTMLElement = document.createElement(tagName);
      el.classList.add(classAdd);
      return el;
    } 

    createToyCard(data:Array<Itoys>, num:number){
 
        const toyCard = this.createEl('div','toy-card');
        const toyCardImg = this.createEl('div', 'toy-card-img');
        const toyCardTitle = this.createEl('div', 'toy-card-title');
        const toyCardDescription = this.createEl('div', 'toy-card-description');
        
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
    
          this.container.append(toyCard);
          toyCard.append(toyCardTitle);
          toyCard.append(toyCardImg);
          toyCard.append(toyCardDescription);
          toyCardImg.append(favoriteCheckImg);
          
    }

    filterBySearch(){
        constant.clearSearch.addEventListener('click', ()=>{
            constant.searchInput.value='';
            this.filt(arrToys, this.available.forms, this.available.colors, this.available.sizes);
          })
          constant.searchInput.addEventListener('keydown', ()=>{
            this.filt(arrToys, this.available.forms, this.available.colors, this.available.sizes);
          });
    }

    filterByColor (){
        for (let i =0; i<this.toyColors.length; i++){
            //подкрасить активный цвет
            if(localStorage.getItem('colors')){
                this.available.colors=(<string>localStorage.getItem('colors')).split(',');
                if((this.available.colors).includes(this.allColors[i])){
                    this.toyColors[i].classList.add('active-btn')
            }
            }
            //при нажатии на цвет удалить или добавить
                this.toyColors[i].addEventListener('click', ()=>{
                    this.isFilters.isFilterByColor = true;
                if(!this.toyColors[i].classList.contains('active-btn')){
                    (this.available.colors).push(this.allColors[i]);
            }else{
                    const index = (this.available.colors).indexOf(this.allColors[i]);
                    if (index > -1) {
                        (this.available.colors).splice(index, 1);
                    }   
            }
            this.toyColors[i].classList.toggle('active-btn');
            localStorage.setItem('colors', `${this.available.colors}`);
            if((this.available.colors).length==0){
                this.isFilters.isFilterByColor=false;
            }
            this.filt(this.toys, this.available.forms, this.available.colors, this.available.sizes);
            });
        };
    };

    resetFilterByColor (){
        for (let i =0; i<this.toyColors.length; i++){
                if(this.toyColors[i].classList.contains('active-btn')){
                    this.toyColors[i].classList.remove('active-btn');
            }
        }
        this.isFilters.isFilterByColor=false;
        localStorage.removeItem('colors');
        this.available.colors=[];
    };

    filterByForm (){
        let allForms:string[]=['колокольчик', 'шар', 'шишка', 'звезда', 'снежинка', 'фигурка'];
        for (let i =0; i<this.toyForms.length; i++){
            if(localStorage.getItem('forms')){
                this.available.forms=(<string>localStorage.getItem('forms')).split(',');
                if(this.available.forms.includes(allForms[i])){
                    this.toyForms[i].classList.add('active-btn')
            }
        }
            this.toyForms[i].addEventListener('click', ()=>{
                this.isFilters.isFilterByForm = true;
                if(!this.toyForms[i].classList.contains('active-btn')){
                    this.available.forms.push(allForms[i]);
                }else{
                    if (this.available.forms.indexOf(allForms[i]) > -1) this.available.forms.splice(this.available.forms.indexOf(this.allForms[i]), 1);
                    }
                    
                    this.toyForms[i].classList.toggle('active-btn');
                    localStorage.setItem('forms', `${this.available.forms}`);
                    if(this.available.forms.length==0){
                        this.isFilters.isFilterByForm=false;
                    }
                    this.filt(this.toys, this.available.forms, this.available.colors, this.available.sizes);
            })
          }
    };

    resetFilterByForm (){
        for (let i =0; i<this.toyForms.length; i++){
                if(this.toyForms[i].classList.contains('active-btn')){
                    this.toyForms[i].classList.remove('active-btn')
                }
          }
          this.isFilters.isFilterByForm=false;
          localStorage.removeItem('forms');
          this.available.forms=[];
    };

    filterBySize (){
        for (let i =0; i<this.toySizes.length; i++){
            if(localStorage.getItem('sizes')){
                this.available.sizes=(<string>localStorage.getItem('sizes')).split(',');
                if(this.available.sizes.includes(this.allSizes[i])){
                    this.toySizes[i].checked=true;
            }
        }
            this.toySizes[i].addEventListener('change', ()=>{
                this.isFilters.isFilterBySise = true;
                if(this.toySizes[i].checked){
                    this.available.sizes.push(this.allSizes[i]);
                    
                }else{
                    if (this.available.sizes.indexOf(this.allSizes[i]) > -1) {
                        this.available.sizes.splice(this.available.sizes.indexOf(this.allSizes[i]), 1);
                    }   
                }
                localStorage.setItem('sizes', `${this.available.sizes}`);
                if(this.available.sizes.length==0){
                    this.isFilters.isFilterBySise=false;
                }
                this.filt (this.toys, this.available.forms, this.available.colors, this.available.sizes);
            })
        }
    }

    resetFilterBySize (){
        for (let i =0; i<this.toySizes.length; i++){
            this.isFilters.isFilterBySise = false;
                if(this.toySizes[i].checked){
                    this.toySizes[i].checked=false;
                }
        }
        this.isFilters.isFilterBySise=false;
        localStorage.removeItem('sizes')
        this.available.sizes=[];
    }

    sortByNameCount (){
        sort.sort();
      }
};

export let toys = new Toys();
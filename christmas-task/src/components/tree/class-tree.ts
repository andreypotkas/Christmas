import { constant } from "../../index";
import { handleDragEnterLeave, handleOverDrop, handleDragStart } from "./drag&drop";
let isSnow= false;
class Tree{
    private static snowInterval: ReturnType<typeof setInterval>;
    treeArea:string;
    mainTreeContainer:HTMLElement;
    constructor(
        treeArea:string=area,
        mainTreeContainer=(document.getElementById('tree-tree')) as HTMLElement,
    )
    {
        this.treeArea=treeArea;
        this.mainTreeContainer=mainTreeContainer;
        
    }

    createLigthrope(){ 
        let ligthrope = this.createEl('ul', 'lightrope');
        let ligthrope2 = this.createEl('ul', 'lightrope');
        let ligthrope3 = this.createEl('ul', 'lightrope');
        ligthrope.id='lightrope';
        ligthrope2.id='lightrope2';
        ligthrope3.id='lightrope3';
        ligthrope2.classList.add('lightrope2');
        ligthrope3.classList.add('lightrope3');
        (<HTMLElement>document.getElementById('tree-snow')).append(ligthrope);
        (<HTMLElement>document.getElementById('tree-snow')).append(ligthrope2);
        (<HTMLElement>document.getElementById('tree-snow')).append(ligthrope3);
        for (let i = 0; i<9; i++){
            let ligth = this.createEl('li', 'ligth');
            let ligth2 = this.createEl('li', 'ligth');
            let ligth3 = this.createEl('li', 'ligth');
            ligthrope.append(ligth);
            ligthrope2.append(ligth2);
            ligthrope3.append(ligth3);
        }
    }

    createLightropeBtn(){
        let isLightrope=false;
        let lightropeBtn =  document.getElementById('lightrope-btn') as HTMLInputElement;
        let lightropeBtnRed = this.createEl('button', 'lightrope-btn-red');
        let lightropeBtnYellow = this.createEl('button', 'lightrope-btn-yellow');
        let lightropeBtnBlue = this.createEl('button', 'lightrope-btn-blue');
        let lightropeBtnWhite = this.createEl('button', 'lightrope-btn-white');
        let lightropeBtnAll = this.createEl('button', 'lightrope-btn-all');
        document.getElementById('lightrope-colors')?.append(lightropeBtnBlue, lightropeBtnRed, lightropeBtnYellow, lightropeBtnWhite, lightropeBtnAll);
        lightropeBtn.addEventListener('change',()=>{
            if(lightropeBtn.checked==true){
                this.createLigthrope();
                lightropeBtn.classList.toggle('active-btn');
                (<HTMLElement>document.getElementById('lightrope-colors')).style.display='flex';
            }else{
                document.getElementById('lightrope')?.parentNode?.removeChild(<HTMLElement>document.getElementById('lightrope'));
                document.getElementById('lightrope2')?.parentNode?.removeChild(<HTMLElement>document.getElementById('lightrope2'));
                document.getElementById('lightrope3')?.parentNode?.removeChild(<HTMLElement>document.getElementById('lightrope3'));
                lightropeBtn.classList.toggle('active-btn');
                (<HTMLElement>document.getElementById('lightrope-colors')).style.display='none';
            }
        })
        lightropeBtnBlue.addEventListener('click',()=>{
            this.chnageColorLight('blue-light');
        });
        lightropeBtnRed.addEventListener('click',()=>{
            this.chnageColorLight('red-light');
        });
        lightropeBtnWhite.addEventListener('click',()=>{
            this.chnageColorLight('yellow-light');
        });
        lightropeBtnYellow.addEventListener('click',()=>{
            this.chnageColorLight('white-light');
        });
        lightropeBtnAll.addEventListener('click',()=>{
            this.chnageColorLight('all');
        });
       
    }

    createSnowFlake() {
        const snow_flake = document.createElement('i');
        snow_flake.classList.add('fas');
        snow_flake.classList.add('fa-snowflake');
        let snowWidth=(<HTMLElement>document.getElementById('tree-tree')).offsetWidth;
        snow_flake.style.left = Math.random() * snowWidth + 'px';
        snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
        snow_flake.style.opacity = String(Math.random());
        snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
        (<HTMLElement>document.getElementById('tree-snow')).append(snow_flake);
        setTimeout(() => {
            snow_flake.remove();
        }, 5000)
        
    }

    snowAndVolume(){
        let song= document.getElementById('song') as HTMLAudioElement ;
        let snowBtn=this.createEl('button', 'snow-btn');
        let volumeBtn:HTMLElement=this.createEl('button', 'volume-btn');
        document.getElementById('tree-settings-snow')?.append(snowBtn);
        document.getElementById('tree-settings-volume')?.append(volumeBtn);
        volumeBtn.addEventListener('click', ()=>{
        if(song.paused){
            song.play();
        }else{
            song.pause()
        }
        })
        snowBtn.addEventListener('click', ()=>{
            if(isSnow==false){
                Tree.snowInterval=setInterval(this.createSnowFlake, 50);
                isSnow=true;
            }else{
                clearInterval(Tree.snowInterval);
                isSnow=false;
            }
        })
    }

    createEl(tagName:string, classAdd:string):HTMLElement{
        const el:HTMLElement = document.createElement(tagName);
        el.classList.add(classAdd);
        return el;
      } 

    addTreeArea(i:number=1){
        if(this.mainTreeContainer!=null){
            this.mainTreeContainer.innerHTML=`
            <img src="../assets/tree/${1+i}.webp" usemap="#image-map">
            ${this.treeArea}
            <section class="tree-snow" id="tree-snow"></section>
            <section class="tree-lightrope" id="tree-snow"></section>
            `;

            this.addEventsOnTreeArea();
        }
    }

    addEventsOnTreeArea (){
        (<HTMLElement>document.getElementById('area')).addEventListener("dragover", handleOverDrop);
        (<HTMLElement>document.getElementById('area')).addEventListener("drop", handleOverDrop);
        (<HTMLElement>document.getElementById('area')).addEventListener("dragenter", handleDragEnterLeave);
        (<HTMLElement>document.getElementById('area')).addEventListener("dragleave", handleDragEnterLeave); 
    }

    addTypeTrees(){
        for (let i = 0; i < 6; i++){
            let treeType = this.createEl('div', 'type-of-tree');
            let treeTypeImg = new Image(70, 70);
            treeTypeImg.src=`../assets/tree/${i+1}.webp`
            constant.selectTreeContainer.append(treeType);
            treeType.append(treeTypeImg);
            treeType.onclick=function(){
                tree.addTreeArea(i);
            }
          }
          tree.addTreeArea();
    } 
        
    addTypeBg(){
        if(this.mainTreeContainer!=null){
            this.mainTreeContainer.style.background=`url('../assets/bg/1.webp')`;
            this.mainTreeContainer.style.backgroundSize='cover';
            for (let i = 0; i < 8; i++){
                let bgType = this.createEl('div', 'type-of-bg');
                let bgImg = new Image(100, 100);
                bgImg.src=`../assets/bg/${i+1}.webp`;
                constant.selectBgContainer.append(bgType);
                bgType.append(bgImg);
                bgType.addEventListener('click', ()=>{
                    this.changeBg(i);
                })
       }
                
    }
    }
    
    changeBg(i:number){
        if(this.mainTreeContainer!=null){
        this.mainTreeContainer.style.background=`url('../assets/bg/${i+1}.webp')`;
        this.mainTreeContainer.style.backgroundSize='cover';
        }
    }

    createChosenToysOnTreePage (img:string, count:string){
        let treeToy = this.createEl('div', 'tree-toy');
        constant.treeToysContainer.append(treeToy);
        for (let i =0; i<Number(count); i++){
         tree.createChosenToy(img, i, treeToy);
        }
        let treeToyCount = this.createEl('p', 'tree-toy-count');
        treeToy.append(treeToyCount);
        treeToyCount.textContent=`${count}`;
    }
    
    createChosenToy(img:string, i:number, append:HTMLElement){
        let imgToy = new Image(60, 60);
        imgToy.src=`${img}`;
        imgToy.id=`${img+i}`;
        imgToy.style.zIndex='1000'
        imgToy.classList.add('tree-toy-img');
        imgToy.style.position = 'absolute';
        imgToy.addEventListener("dragstart", handleDragStart);
        append.append(imgToy);
      }
    
      chnageColorLight(color:string){
        (<HTMLElement>document.getElementById('lightrope')).className='lightrope';
        (<HTMLElement>document.getElementById('lightrope')).classList.add(`${color}`);
        (<HTMLElement>document.getElementById('lightrope2')).className='lightrope lightrope2';
        (<HTMLElement>document.getElementById('lightrope2')).classList.add(`${color}`);
        (<HTMLElement>document.getElementById('lightrope3')).className='lightrope lightrope3';
        (<HTMLElement>document.getElementById('lightrope3')).classList.add(`${color}`);
    }
    
    
}

let area = `
<map name="image-map">
    <area id="area" class="droppable" target="" alt="" title="" href="" coords="261,702,118,691,0,544,88,538,85,510,41,493,18,451,38,430,117,423,108,386,67,357,92,343,120,347,115,316,160,294,117,280,118,246,99,232,114,205,164,208,166,188,179,169,155,141,175,122,211,138,190,89,250,0,306,77,273,122,312,113,314,153,354,145,352,218,393,214,404,240,356,271,396,281,389,311,352,304,379,342,420,344,433,368,358,399,405,408,415,442,452,440,455,479,418,475,437,521,488,533,498,565,471,585,442,686" shape="poly">
</map> `

export let tree = new Tree();









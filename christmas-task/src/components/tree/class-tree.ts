import { constant } from "../../index";
import { createEl } from "../card";
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

    createSnowFlake() {
        const snow_flake = document.createElement('i');
        snow_flake.classList.add('fas');
        snow_flake.classList.add('fa-snowflake');
        let snowWidth=(<HTMLElement>document.getElementById('tree-tree')).offsetWidth;
        snow_flake.style.left = Math.random() * Number(snowWidth) + 'px';
        console.log(Number(snowWidth));
        snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
        snow_flake.style.opacity = String(Math.random());
        snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
        
        document.getElementById('tree-tree')?.append(snow_flake);
            
        
        
        setTimeout(() => {
            snow_flake.remove();
        }, 5000)
        
    }

    snowAndVolume(){
        let song= document.getElementById('song') as HTMLAudioElement ;
        let snowBtn:HTMLElement=createEl('button', 'snow-btn');
        let volumeBtn:HTMLElement=createEl('button', 'volume-btn');
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

    addTreeArea(i:number=1):void{
        if(this.mainTreeContainer!=null){
            this.mainTreeContainer.innerHTML=`
            <img src="../assets/tree/${1+i}.webp" usemap="#image-map">
            ${this.treeArea}`;
            this.addEventsOnTreeArea();
        }
    }

    addEventsOnTreeArea ():void{
        (<HTMLElement>document.getElementById('area')).addEventListener("dragover", handleOverDrop);
        (<HTMLElement>document.getElementById('area')).addEventListener("drop", handleOverDrop);
        (<HTMLElement>document.getElementById('area')).addEventListener("dragenter", handleDragEnterLeave);
        (<HTMLElement>document.getElementById('area')).addEventListener("dragleave", handleDragEnterLeave); 
    }

    addTypeTrees(){
        for (let i = 0; i < 6; i++){
            let treeType = createEl('div', 'type-of-tree');
            let treeTypeImg = new Image(80, 80);
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
                let bgType = createEl('div', 'type-of-bg');
                let bgImg = new Image(50, 50);
                bgImg.src=`../assets/bg/${i+1}.webp`;
                constant.selectBgContainer.append(bgType);
                bgType.append(bgImg);
                bgType.addEventListener('click', ()=>{
                    this.changeBg(i)
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
        let treeToy = createEl('div', 'tree-toy');
        constant.treeToysContainer.append(treeToy);
        for (let i =0; i<Number(count); i++){
         tree.createChosenToy(img, i, treeToy);
        }
        let treeToyCount = createEl('p', 'tree-toy-count');
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
}

let area = `
<map name="image-map">
    <area id="area" class="droppable" target="" alt="" title="" href="" coords="261,702,118,691,0,544,88,538,85,510,41,493,18,451,38,430,117,423,108,386,67,357,92,343,120,347,115,316,160,294,117,280,118,246,99,232,114,205,164,208,166,188,179,169,155,141,175,122,211,138,190,89,250,0,306,77,273,122,312,113,314,153,354,145,352,218,393,214,404,240,356,271,396,281,389,311,352,304,379,342,420,344,433,368,358,399,405,408,415,442,452,440,455,479,418,475,437,521,488,533,498,565,471,585,442,686" shape="poly">
</map> `

export let tree = new Tree();










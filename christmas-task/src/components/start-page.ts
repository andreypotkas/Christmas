import { constant } from "..";
import { createTreeToy } from "./create-tree-toys";
import { arrToys } from "./example";
export function addButtonsOnPage(){
    constant.startPageBtn?.addEventListener('click', ()=>{
        constant.toyPage?.classList.add('hide');
        constant.treePage?.classList.add('hide');
        constant.startPage?.classList.remove('hide');
      });
      
      constant.treePageBtn?.addEventListener('click', ()=>{
        constant.toyPage?.classList.add('hide');
        constant.treePage?.classList.remove('hide');
        constant.startPage?.classList.add('hide');
        
        if(localStorage.getItem('chosenToys')){
        arrToys.forEach(e=>{
              let chosenToysNames = (<string>localStorage.getItem('chosenToys')).split(',');
                if(chosenToysNames.includes(e.toyName)){
                  createTreeToy(`${e.toyImg}`, `${e.toyCount}`);
                }
        })
      }else{
        for(let i =0; i < 20; i++){
          createTreeToy(`${arrToys[i].toyImg}`, `${arrToys[i].toyCount}`)
        }
      }
      });
      
      constant.toyPageBtn?.addEventListener('click', ()=>{
        constant.toyPage?.classList.remove('hide');
        constant.treePage?.classList.add('hide');
        constant.startPage?.classList.add('hide');
      });
}
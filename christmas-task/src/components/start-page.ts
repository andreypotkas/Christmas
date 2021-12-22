import { constant } from "..";
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
      });
      
      constant.toyPageBtn?.addEventListener('click', ()=>{
        constant.toyPage?.classList.remove('hide');
        constant.treePage?.classList.add('hide');
        constant.startPage?.classList.add('hide');
      });
}
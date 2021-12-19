import { Itoys } from "./example";

document.getElementById('clear-search')?.addEventListener('click', ()=>{
    (<HTMLInputElement>document.getElementById('search-input')).value='';
  })

  export const searchInput = document.getElementById('search-input') as HTMLInputElement;
  
  
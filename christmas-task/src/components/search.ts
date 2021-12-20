
import { available, constant, filt } from "..";
import { arrToys } from "./example";
export function filterBySearch(){
constant.clearSearch.addEventListener('click', ()=>{
    constant.searchInput.value='';
    filt(arrToys, available.forms, available.colors, available.sizes);
  })
  constant.searchInput.addEventListener('keydown', ()=>{
    filt(arrToys, available.forms, available.colors, available.sizes);
  });
}
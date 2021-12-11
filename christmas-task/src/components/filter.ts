import data from "./data";
import { toy } from "./data";


  
  data.sort(function(a,b){
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return textA.localeCompare(textB);
  });


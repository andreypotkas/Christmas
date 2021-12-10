import "./scss/style.scss";
import data from "./components/data";
import { createToyCard } from "./components/card";

for (let i = 1; i<data.length;i++){
    createToyCard(data, i);
}




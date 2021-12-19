import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';
import { cssClasses } from "nouislider";
import { TargetElement } from "./nouislider";
import { Itoys } from './example';
import { arrToys } from './example';
import { container, createToyCard } from './card';
import { filt } from '..';
import { availableForms } from './filter-by-form';
import { availableColors, isFilterByColor } from './filter-by-color';
import { availableSizes, isFilterBySise } from './filter-by-size';

export let isFilterByCount = false;
export let isFilterByYear = false;

export const state = {
    sliderCountValue: {min:0, max:12},
    sliderYearValue: {min:1940, max:2020}
  }
const sliderCount = document.getElementById('slider-count') as TargetElement;
sliderCount.addEventListener('click', ()=>{
    filt (arrToys, availableForms, availableColors, availableSizes);
})


  /*    */
const sliderYear = document.getElementById('slider-year')as TargetElement;
sliderYear.addEventListener('click', ()=>{
    filt (arrToys, availableForms, availableColors, availableSizes);
})
let filtredArr:Itoys[];
export function createSliders(){
    if(sliderCount){
        noUiSlider.create(sliderCount, {
            start: [0, 12],
            connect: true,
            step:1,
            range: {
                'min': 0,
                'max': 12
            }
        });
        const input0 = document.getElementById('input-0') as HTMLInputElement;
        const input1 = document.getElementById('input-1') as HTMLInputElement;
        const inputs:Array<HTMLInputElement> = [input0, input1];
        
            sliderCount.noUiSlider.on('update', function(values:(string|number)[], handle:number):void{
                isFilterByCount = true;
                inputs[String(handle)].value = Math.round(values[String(handle)]);
                
                state.sliderCountValue.min=Math.round(values[String(0)]);
                state.sliderCountValue.max=Math.round(values[String(1)]);
                /*  */
            });
        
            const setRangeSlider = (i:number, value:string) => {
                let arr:Array<string> = [];
                
                arr[i] = value;
                sliderCount.noUiSlider.set(arr);
            };
        
            inputs.forEach((el, index:number) => {
                el.addEventListener('change', (e:Event) => {
                    setRangeSlider(index, (<HTMLInputElement>e.currentTarget).value);
                });
            });
}
        if(sliderYear){
            noUiSlider.create(sliderYear, {
                start: [1940, 2020],
                connect: true,
                step:10,
                range: {
                    'min': 1940,
                    'max': 2020
                }
            });
            const input2 = document.getElementById('input-2') as HTMLInputElement;
            const input3 = document.getElementById('input-3') as HTMLInputElement;
            const inputs:Array<HTMLInputElement> = [input2, input3];
            
                sliderYear.noUiSlider.on('update', function(values:(string|number)[], handle:number):void{
                    inputs[String(handle)].value = Math.round(values[String(handle)]);
                    isFilterByYear =true;
                    
                    
                state.sliderYearValue.min=Math.round(values[String(0)]);
                state.sliderYearValue.max=Math.round(values[String(1)]);
                /* filt (arrToys, availableForms, availableColors, availableSizes); */
                });
            
                const setRangeSlider = (i:number, value:string) => {
                    let arr:Array<string> = [];
                    arr[i] = value;
                    sliderYear.noUiSlider.set(arr);
                };
            
                inputs.forEach((el, index:number) => {
                    el.addEventListener('change', (e:Event) => {
                        setRangeSlider(index, (<HTMLInputElement>e.currentTarget).value);
                    });
                });
            }

}

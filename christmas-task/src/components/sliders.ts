import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';
import { TargetElement } from "./nouislider";
import { Itoys } from './example';
import { arrToys } from './example';
import { filt} from '..';

import {available} from '../index'




export const state = {
    sliderCountValue: {min:0, max:12},
    sliderYearValue: {min:1940, max:2020},
    sliderCount: document.getElementById('slider-count') as TargetElement,
    sliderYear:  document.getElementById('slider-year')as TargetElement
  }

state.sliderCount.addEventListener('click', ()=>{
    filt (arrToys, available.forms, available.colors, available.sizes);
    localStorage.setItem('sliderCount', `${state.sliderCount.noUiSlider.get()}`);
    });




state.sliderYear.addEventListener('click', ()=>{
    filt (arrToys, available.forms, available.colors, available.sizes);
    localStorage.setItem('sliderYear', `${state.sliderYear.noUiSlider.get()}`);
})
let filtredArr:Itoys[];
export function createSliders(){
    if(state.sliderCount){
        noUiSlider.create(state.sliderCount, {   
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
        
            state.sliderCount.noUiSlider.on('update', function(values:(string|number)[], handle:number):void{
                inputs[String(handle)].value = Math.round(values[String(handle)]);
                state.sliderCountValue.min=Math.round(values[String(0)]);
                state.sliderCountValue.max=Math.round(values[String(1)]);
            });
        
            const setRangeSlider = (i:number, value:string) => {
                let arr:Array<string> = [];
                arr[i] = value;
                state.sliderCount.noUiSlider.set(arr);
                
            };
        
            inputs.forEach((el, index:number) => {
                el.addEventListener('change', (e:Event) => {
                    setRangeSlider(index, (<HTMLInputElement>e.currentTarget).value);
                });
            });
}
        if(state.sliderYear){
            noUiSlider.create(state.sliderYear, {
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
            
            state.sliderYear.noUiSlider.on('update', function(values:(string|number)[], handle:number):void{
                    inputs[String(handle)].value = Math.round(values[String(handle)]);
                    
                state.sliderYearValue.min=Math.round(values[String(0)]);
                state.sliderYearValue.max=Math.round(values[String(1)]);
                
                });
            
                const setRangeSlider = (i:number, value:string) => {
                    let arr:Array<string> = [];
                    arr[i] = value;
                    state.sliderYear.noUiSlider.set(arr);
                };
            
                inputs.forEach((el, index:number) => {
                    el.addEventListener('change', (e:Event) => {
                        setRangeSlider(index, (<HTMLInputElement>e.currentTarget).value);
                    });
                });
            }
                if(localStorage.getItem('sliderCount')){
                    state.sliderCount.noUiSlider.set((<string>localStorage.getItem('sliderCount')).split(','));
                }
                if(localStorage.getItem('sliderYear')){
                    state.sliderYear.noUiSlider.set((<string>localStorage.getItem('sliderYear')).split(','));
                }
}

export function resetSliders(){
  state.sliderCount.noUiSlider.set([0, 12]);
  state.sliderYear.noUiSlider.set([1940, 2020]);
  localStorage.removeItem('sliderCount');
  localStorage.removeItem('sliderYear');
}
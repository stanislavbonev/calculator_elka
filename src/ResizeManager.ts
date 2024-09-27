import { Container } from "pixi.js"
import * as PIXI from 'pixi.js';

    export const resizeContainer = (container:Container) => {
    const calculatorView = container.children[0] as PIXI.Container
    let model:string = '';

    if(calculatorView.children[0]) {
        model = calculatorView.children[0].name
    }

        if(calculatorView.children.length > 0) {
    
             if(!isLandscape) {
                const scaleX =  window.innerWidth / 260;
                const scaleY =  window.innerHeight / 485;
                const scale = Math.min(scaleX, scaleY) * 0.8;
                container.scale.set(scale);

                container.x =  window.innerWidth  / 2;
                container.y =  window.innerHeight  / 2;
            }else {
                const scaleX = window.innerWidth / 260;
                const scaleY = window.innerHeight / 485;
                const scale = Math.min(scaleX, scaleY) * 0.8;
                container.scale.set(scale);

                container.x =  window.innerWidth  / 2;
                container.y =  window.innerHeight  / 2;
            }  
          }
        }


    export const isLandscape = () => {
        if(window.innerHeight > window.innerWidth) { 
            console.log("Portrait");
            return false;
        }else {
            console.log("Landscape");
            return true;
            }
        }    



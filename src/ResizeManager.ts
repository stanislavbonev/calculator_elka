import { Container } from "pixi.js"
import * as PIXI from 'pixi.js';

    export const resizeContainer = (container:Container) => {

    const dpr = window.devicePixelRatio;

    const calculatorView = container.children[0] as PIXI.Container

    let coeff = 0;
           
        if(calculatorView.children.length > 0) {
    
             if(container.width < window.innerWidth && !isLandscape()) {

                container.scale.set(1);

                container.x =  window.innerWidth  / 2
                container.y =  window.innerHeight  / 2
                return
            }
                const scaleX =   260 / window.innerWidth;
                const scaleY =   485 / window.innerHeight;
                const scale1 = Math.min(scaleX, scaleY);
    
     
                container.scale.set(scale1*coeff);
                container.x =  window.innerWidth  / 2;
                container.y =  window.innerHeight  / 2;
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



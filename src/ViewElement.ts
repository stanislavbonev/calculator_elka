import * as PIXI from 'pixi.js';
import { ViewDimensions } from './Interfaces';


export class ViewElement extends PIXI.Container implements ViewDimensions {

    viewDimensions: {
        portrait: {
            width: number;
            height: number;
            positionX: number;
            positionY: number; 
            size:number;
        },
        landscape: {
            width: number;
            height: number;
            positionX: number;
            positionY: number; 
            size:number;
        } 
       
    };

    constructor() {
        super();

    }
   
}
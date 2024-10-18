import * as PIXI from 'pixi.js';
import { ILayoutDimension, IViewDimensions } from './Interfaces';


export class ViewElement extends PIXI.Container implements IViewDimensions {

    viewDimensions: {
        portrait: ILayoutDimension,
        landscape: ILayoutDimension 
    };

    constructor() {
        super();

    }
   
}
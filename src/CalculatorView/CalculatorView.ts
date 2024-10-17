import * as PIXI from 'pixi.js';

import { CalculatorEvents } from "../CalculatorEvents";
import { EventDispatcher } from "../EventDispatcher";
import { CalculatorFactory } from "../Factory/CalculatorFactory"
import { elka103 } from "../CalculatorType/Elka103";
import { elka1300 } from "../CalculatorType/Elka1300";
import { IElkaCalculator } from '../Interfaces';
import { getRegister } from '../Helpers';
import { ViewElement } from '../ViewElement';

export class CalculatorView extends ViewElement {

    private calculatorView: PIXI.Container;
    private viewRegister: Map<string, IElkaCalculator>;
 
    constructor() {
        super();
        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.BASIC_CALCULATOR_BUTTON_PRESSED, this.createCalculator, this)
        this.init();
    }

    private init() {
        this.loadRegister();
    }

    private createCalculator(viewKey: string) {
        const modelType: IElkaCalculator = getRegister(this.viewRegister, viewKey);

        this.viewDimensions =
        {
            portrait: {
                width: modelType.background.outlineWidth,
                height: modelType.background.outlineHeight,
                positionX: 0.5,
                positionY: 0.5,
                size: 0.8
            },
            landscape: {
                width: modelType.background.outlineWidth,
                height: modelType.background.outlineHeight,
                positionX: 0.5,
                positionY: 0.5,
                size: 0.8
            }
            
        }

        this.calculatorView = new CalculatorFactory(modelType).returnView();
        this.calculatorView.name = modelType.model;
        this.calculatorView.pivot.set(this.calculatorView.width * 0.5, this.calculatorView.height * 0.5);

        this.addChild(this.calculatorView);
    }

    private loadRegister() {
        if (!this.viewRegister) {
            this.viewRegister = new Map();
        }

        this.viewRegister.set(elka103.model, elka103);
        this.viewRegister.set(elka1300.model, elka1300);
    }

}


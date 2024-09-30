import * as PIXI from 'pixi.js';

import { CalculatorEvents } from "../CalculatorEvents";
import { EventDispatcher } from "../EventDispatcher";
import { CalculatorFactory } from "../Factory/CalculatorFactory"
import { elka103 } from "../CalculatorType/Elka103";
import { elka1300 } from "../CalculatorType/Elka1300";
import { IElkaCalculator } from '../Interfaces';
import { getRegister } from '../Helpers';

interface ViewDimensions {
    width: number,
    height: number
}
export class CalculatorView extends PIXI.Container implements ViewDimensions {

    private calculatorView: PIXI.Container;
    private viewRegister: Map<string, IElkaCalculator>;
    public viewDimensions: ViewDimensions;

    constructor() {
        super();
        this.viewDimensions = {
            width: 0,
            height: 0
        };
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
            width: modelType.background.outlineWidth,
            height: modelType.background.outlineHeight
        }

        this.calculatorView = new CalculatorFactory(modelType).returnView();
        this.calculatorView.name = modelType.model;
        this.calculatorView.pivot.set(this.calculatorView.width / 2, this.calculatorView.height / 2);

        this.addChild(this.calculatorView)
    }

    private loadRegister() {
        if (!this.viewRegister) {
            this.viewRegister = new Map();
        }

        this.viewRegister.set(elka103.model, elka103);
        this.viewRegister.set(elka1300.model, elka1300);
    }

    private getRegister(register: Map<string, IElkaCalculator>, key: string) => {
    if (!register.get(key)) {
        console.warn("NQMA GO TOZ KLIUCH BA PAPUUUSHH")
    } else {
        return register.get(key);
    }
}

}


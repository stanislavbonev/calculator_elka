import { CalculatorModel } from "../CalculatorModel/CalculatorModel";
import { CalculatorFactory } from "../Factory/CalculatorFactory";
import { CalculatorView } from "../CalculatorView/CalculatorView";
import { CalculatorEvents } from "../CalculatorEvents";
import { EventDispatcher } from "../EventDispatcher";
import * as PIXI from "pixi.js";

export class CalculatorController extends PIXI.Container {

    private calaculatorFactory: CalculatorFactory;
    private calculatorView: CalculatorView;
    private calculatorModel: CalculatorModel;

    constructor(model: CalculatorModel,calculatorView:CalculatorView) {
        super();
        this.calculatorModel = model;
        this.calculatorView = calculatorView;
        this.init();
    }

    private init() {
        this.setCalculatorView();
       // this.setCalculatorFactory();
        this.setControllerObserver();

        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.NUMERIC_BUTTON_PRESSED, this.readNumericButton.bind(this));
        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.OPERATOR_BUTTON_PRESSED, this.readOperatorButton.bind(this));
        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.POWER_BUTTON_PRESSED, this.calculatorPower.bind(this));
    }

    private calculatorPower(data:boolean){
console.log(data)
    }

    private readNumericButton(data: number) {
        this.calculatorModel.setDisplayData(data);
    }

    private readOperatorButton(data: string) {

        if (["+","-","x","/"].includes(data)) {
            this.calculatorModel.setOperator(data);
        }

        if (data === "C") {
            this.calculatorModel.clearMemory();
        }

        if (data === "=") {
        this.calculatorModel.calculateResult();
        }
    }

    private updateCalculatorDisplay(data: any) {
        this.calculatorView.updateCalculatorDisplay(data);
    }

    private setCalculatorView() {
        this.addChild(this.calculatorView);
    }

    private setCalculatorFactory() {
        this.calaculatorFactory = new CalculatorFactory(this.calculatorView);
    }

    private setControllerObserver() {
        this.calculatorModel.addObserver(this.updateCalculatorDisplay.bind(this));
    }

}
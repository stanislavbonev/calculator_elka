import * as PIXI from 'pixi.js';
import {elka103,elka1300} from "../CalculatorType/CalculatorType"
import { CalculatorEvents } from "../CalculatorEvents";
import { EventDispatcher } from "../EventDispatcher";
import { NumericButton } from "../Buttons/NumericButton";
import { OperatorButton } from "../Buttons/OperatorButton";
import { CalculatorView } from '../CalculatorView/CalculatorView';
import { CalculatorDisplay } from "../CalculatorDisplay/CalculatorDisplay";
import { CalculatorBackground } from "../CalculatorBackground/CalculatorBackground";
import { Elka103 } from "../CalculatorType/CalculatorType"
export class CalculatorFactory extends PIXI.Container {

    private button: (NumericButton | OperatorButton);
    private buttons: (NumericButton | OperatorButton)[] = [];
    private calculatorView: CalculatorView;
    private calculatorType: any;
    public display:any

    constructor(calculatorType:any) {
        super();
        this.calculatorType = calculatorType;
    }

    public returnView() {
        return this.createCalculatorButtons()
    }

    private createCalculatorButtons() {
        let index: number = 0;
console.log(this.calculatorType.buttons.length)
        const calculatorView:PIXI.Container = new PIXI.Container()

        for (let rows = 0; rows < this.calculatorType.rows; rows++) {

            for (let columns = 0; columns < this.calculatorType.columns; columns++) {

                index = rows * this.calculatorType.columns + columns;

                // if(this.calculatorType.buttons[index].type === 'empty'){
                //     //columns++
                //     console.log(columns,'propuskameeeeeee')
                // }

                if (this.calculatorType.buttons[index].type === 'number') {
                    this.button = new NumericButton(
                        this.calculatorType.buttons[index].label, 
                        columns * 60, 
                        rows * 60,
                        this.calculatorType.buttons[index].color
                        );
                        this.buttons.push(this.button);
                }

                if (this.calculatorType.buttons[index].type === 'operator') {
                    this.button = new OperatorButton(
                        this.calculatorType.buttons[index].label,
                        columns * 60,
                        rows * 60,
                        this.calculatorType.buttons[index].color);
                        this.buttons.push(this.button);
                }
                // if (this.calculatorType.buttons[index].type === 'empty') {
                //  columns++
                // }
            }
        }

        const background = new CalculatorBackground(
            this.calculatorType.background.backgroundWidth,
            this.calculatorType.background.backgroundHeight,
            this.calculatorType.background.backgroundColor,
            this.calculatorType.background.backgroundRadius,
            this.calculatorType.background.outlineWidth,
            this.calculatorType.background.outlineHeight,
            this.calculatorType.background.outlineRadius,
            this.calculatorType.background.outlineColor,
        )

        const buttonContainer:PIXI.Container = new PIXI.Container();

        calculatorView.addChild(background);

        this.buttons.forEach(button => {
            buttonContainer.addChild(button);
        })

        buttonContainer.x=8;
        buttonContainer.y=140;
        buttonContainer.scale.set(0.7)
        calculatorView.addChild(buttonContainer)

        this.display = new CalculatorDisplay(
            this.calculatorType.display.displayWidth,
            this.calculatorType.display.displayHeight,
            this.calculatorType.display.displayRadius,
            this.calculatorType.display.digitsColor,
            this.calculatorType.display.frontCoverColor,
            this.calculatorType.display.maxDigits,
            this.calculatorType.display.positionX,
            this.calculatorType.display.positionY
        ) 
        calculatorView.addChild(this.display)

        return calculatorView;
    }
}


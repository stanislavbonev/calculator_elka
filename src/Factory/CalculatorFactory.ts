import * as PIXI from 'pixi.js';
import { elka103 } from "../CalculatorType/Elka103";
import { elka1300 } from "../CalculatorType/Elka1300";
import { CalculatorEvents } from "../CalculatorEvents";
import { EventDispatcher } from "../EventDispatcher";
import { NumericButton } from "../Buttons/NumericButton";
import { OperatorButton } from "../Buttons/OperatorButton";
import { CalculatorView } from '../CalculatorView/CalculatorView';
import { CalculatorDisplay } from "../CalculatorDisplay/CalculatorDisplay";
import { CalculatorBackground } from "../CalculatorBackground/CalculatorBackground";
import { IElkaCalculator } from '../Interfaces';

export class CalculatorFactory extends PIXI.Container {

    private button: (NumericButton | OperatorButton);
    private buttons: (NumericButton | OperatorButton)[] = [];
    private calculatorView: CalculatorView;
    private calculatorType: IElkaCalculator;

    constructor(calculatorType:IElkaCalculator) {
        super();
        this.calculatorType = calculatorType;
    }

    public returnView() {
        return this.createCalculatorButtons()
    }

    private createCalculatorButtons() {
        let index: number = 0;

        const calculatorView:PIXI.Container = new PIXI.Container()

        for (let rows = 0; rows < this.calculatorType.rows; rows++) {

            for (let columns = 0; columns < this.calculatorType.columns; columns++) {

                index = rows * this.calculatorType.columns + columns;

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
            }
        }

        const background = new CalculatorBackground(this.calculatorType)

        const buttonContainer:PIXI.Container = new PIXI.Container();

        calculatorView.addChild(background);

        this.buttons.forEach(button => {
            buttonContainer.addChild(button);
        })

        buttonContainer.x=8;
        buttonContainer.y=140;
  
        calculatorView.addChild(buttonContainer)

        const display = new CalculatorDisplay(this.calculatorType) 
        calculatorView.addChild(display)

        return calculatorView;
    }
}


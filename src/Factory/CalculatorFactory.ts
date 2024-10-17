import * as PIXI from 'pixi.js';
import { NumericButton } from "../Buttons/CalculatorButtons/NumericButton";
import { OperatorButton } from "../Buttons/CalculatorButtons/OperatorButton";
import { CalculatorDisplay } from "../CalculatorDisplay/CalculatorDisplay";
import { CalculatorBackground } from "../CalculatorBackground/CalculatorBackground";
import { IElkaCalculator } from '../Interfaces';
import { Button } from '../Buttons/ButtonEnums';
import { ViewElement } from '../ViewElement';

export class CalculatorFactory extends PIXI.Container {

    private button: (NumericButton | OperatorButton);
    private buttons: (NumericButton | OperatorButton)[] = [];

    constructor(private readonly calculatorType: IElkaCalculator) {
        super();
    }

    public returnView() {
        return this.createCalculatorView()
    }

    private createCalculatorView(): ViewElement {
        let index: number = 0;

        const calculatorView: ViewElement = new ViewElement()

        for (let rows = 0; rows < this.calculatorType.rows; rows++) {

            for (let columns = 0; columns < this.calculatorType.columns; columns++) {

                index = rows * this.calculatorType.columns + columns;

                if (this.calculatorType.buttons[index].type === Button.Number) {
                    this.button = new NumericButton(
                        this.calculatorType.buttons[index].label,
                        columns * 60,
                        rows * 60,
                        this.calculatorType.buttons[index].color
                    );
                    this.buttons.push(this.button);
                }

                if (this.calculatorType.buttons[index].type === Button.Operator) {
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

        const buttonContainer: PIXI.Container = new PIXI.Container();

        calculatorView.addChild(background);

        this.buttons.forEach(button => {
            buttonContainer.addChild(button);
        })

        buttonContainer.x = 8;
        if (this.calculatorType.buttonsPosY) {
            buttonContainer.y = this.calculatorType.buttonsPosY;
        }

        calculatorView.addChild(buttonContainer)

        const display = new CalculatorDisplay(this.calculatorType)
        calculatorView.addChild(display)

        return calculatorView;
    }
}


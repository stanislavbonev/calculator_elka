import * as PIXI from 'pixi.js';
import elka103 from "../CalculatorType/CalculatorType"
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
    constructor(calculatorType:any ) {
        super();
        this.calculatorType = calculatorType;
        console.log(calculatorType,"llllllllllllllllllllllllll")
        // this.calculatorView = calculatorView;
        // EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.BASIC_CALCULATOR_BUTTON_PRESSED, this.createCalculatorButtons, this)
       // this.returnView()
    }

    //to refactor the positioning of the buttons "Single Resposibility"
    //and to add logic for the advanced calculator
    //to refactor the types of the variables

    public returnView() {
//         const container = new PIXI.Container()
//         const background = this.createCalculatorBackground()
       
//    // container.addChild(background)   // 
//         container.addChild(this.createCalculatorDisplay())
       
//             this.createCalculatorButtons().forEach((btn)=>{
//                 container.addChild(btn)
//             })
//    return container
return this.createCalculatorButtons()
    }

    //public createCalculatorButtons(type: string) {
    private createCalculatorButtons() {
        // calculatorType: any
        let index: number = 0;
        const calculatorView:PIXI.Container = new PIXI.Container()
        // if (type === 'Elka101') {
        //     this.calculatorType = elka103;
        // }

        for (let rows = 0; rows < this.calculatorType.rows; rows++) {

            for (let columns = 0; columns < this.calculatorType.columns; columns++) {
                //TODO
                index = rows * this.calculatorType.columns + columns;
                
                if (typeof this.calculatorType.buttons[index].type === 'number') {
                    this.button = new NumericButton(
                        this.calculatorType.buttons[index].type, 
                        columns * 60, 
                        rows * 60,
                        this.calculatorType.buttons[index].color
                        );
                    this.buttons.push(this.button);
                }

                if (typeof this.calculatorType.buttons[index].type === 'string') {
                    this.button = new OperatorButton(
                        this.calculatorType.buttons[index].type,
                        columns * 60,
                        rows * 60,
                        this.calculatorType.buttons[index].color);
                    this.buttons.push(this.button);
                }
            }
        }
        //return this.buttons;
        //this.calculatorView.createButtons(this.buttons);


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
        const buttonContainer:PIXI.Container = new PIXI.Container()
        calculatorView.addChild(background);
        this.buttons.forEach(button => {
            buttonContainer.addChild(button);
        })
        buttonContainer.x=8;
        buttonContainer.y=140;
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

    private createCalculatorDisplay() {
        // this.display = new CalculatorDisplay(
        //     this.calculatorType.display.displayWidth,
        //     this.calculatorType.display.displayHeight,
        //     this.calculatorType.display.displayRadius,
        //     this.calculatorType.display.digitsColor,
        //     this.calculatorType.display.frontCoverColor,
        //     this.calculatorType.display.maxDigits,
        // ) 
       // this.calculatorType.background[0]. 
       
        return this.display;
    }

    private createCalculatorBackground() {
        let background = new CalculatorBackground(
            this.calculatorType.background.backgroundWidth,
            this.calculatorType.background.backgroundHeight,
            this.calculatorType.background.backgroundColor,
            this.calculatorType.background.backgroundRadius,
            this.calculatorType.background.outlineWidth,
            this.calculatorType.background.outlineHeight,
            this.calculatorType.background.outlineRadius,
            this.calculatorType.background.outlineColor,
        )
        console.log(background,"aaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        return background;
    }

 
}


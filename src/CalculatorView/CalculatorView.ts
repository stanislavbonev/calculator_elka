import * as PIXI from 'pixi.js';
import { filters } from 'pixi.js';
import { BasicCalculatorButton } from "../Buttons/BasicCalculatorButton";
import { OnOffButton } from "../Buttons/OnOffButton";
import { GameApplication } from "../GameApplication";
import { TextStyle } from 'pixi.js';
//import { GlowFilter } from '@pixi/filter-glow';
import gsap from 'gsap';
import { text } from 'stream/consumers';
import { CalculatorEvents } from "../CalculatorEvents";
import { EventDispatcher } from "../EventDispatcher";
import { CalculatorFactory } from "../Factory/CalculatorFactory"
import { elka103 } from "../CalculatorType/Elka103";
import { elka1300 } from "../CalculatorType/Elka1300";

export class CalculatorView extends PIXI.Container {

    private calculatorView:PIXI.Container;

    constructor() {
        super();
        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.BASIC_CALCULATOR_BUTTON_PRESSED, this.createCalculator, this)
        this.init();
    }

    private init() {
       //this.createContainer();
      // this.createCalculatorSelectorButtons();
       this.createPowerButton();
    }

    private createCalculator() {
       this.calculatorView = new CalculatorFactory(elka103).returnView();
       this.calculatorView.name = 'elka'
       this.calculatorView.pivot.set(this.calculatorView.width / 2, this.calculatorView.height / 2)
       //this.calculatorView.x = 600;
       //this.calculatorView.y = 100;
       console.log(this.calculatorView)
       this.addChild(this.calculatorView)
    }

    private createCalculatorSelectorButtons() {
        const btn: BasicCalculatorButton = new BasicCalculatorButton("Elka 101", 550, 50)
        this.addChild(btn);
    }

    private createPowerButton() {
        const powerButton: OnOffButton = new OnOffButton();
        powerButton.x = 20
        powerButton.y = 20
    }

    // private createContainer() {
    //     this.container = new PIXI.Container();
    //     this.container.x = 10;
    //     this.container.y = 10;
    //     this.container.width

    //     this.buttonContainer = new PIXI.Container();
    //     this.buttonContainer.y=120;

    //     this.backgroundContainer = new PIXI.Container();
    //     this.backgroundContainer.x = 650;
    //     this.backgroundContainer.y = 100;
    //     this.backgroundContainer.scale.set(0.9)
    // }
}


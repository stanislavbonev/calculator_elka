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
import {elka103, elka1300} from "../CalculatorType/CalculatorType"

export class CalculatorView extends PIXI.Container {

    private container: PIXI.Container;
    private buttonContainer: PIXI.Container;
    private backgroundContainer: PIXI.Container;
    private calculatorDisplay: PIXI.Sprite;
    private calculatorDisplayCover: PIXI.Sprite;
    private metalStrip: PIXI.Sprite;
    private displayNumerics: PIXI.Text;
    private displayNumericsEmpty: PIXI.Text;
    private displayTemporary: PIXI.Text;
    private calcuatorBackground: PIXI.Sprite;
    private calculatorView:any
    constructor() {
        super();
        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.BASIC_CALCULATOR_BUTTON_PRESSED, this.createButtons, this)
        this.init();
    }

    private init() {
       this.createContainer();
       this.createCalculatorButtons();
       this.createPowerButton();
    }

    private createButtons() {
       this.calculatorView = new CalculatorFactory(elka1300).returnView();
       this.calculatorView.x = 800;
       this.calculatorView.y = 100;

    this.addChild( this.calculatorView)
    }

    private createCalculatorButtons() {
        const btn: BasicCalculatorButton = new BasicCalculatorButton("Elka 101", 550, 50)
        this.addChild(btn);
    }

    private createPowerButton(){
        const powerButton: OnOffButton = new OnOffButton();
        powerButton.x = 20
        powerButton.y = 20
    }

    private createContainer() {
        this.container = new PIXI.Container();
        this.container.x = 10;
        this.container.y = 10;
        this.container.width

        this.buttonContainer = new PIXI.Container();
        this.buttonContainer.y=120;

        this.backgroundContainer = new PIXI.Container();
        this.backgroundContainer.x = 650;
        this.backgroundContainer.y = 100;
        this.backgroundContainer.scale.set(0.9)
    }
}


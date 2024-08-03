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
import elka103 from "../CalculatorType/CalculatorType"

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
        // this.createCalculatorOutline();
        // this.createCalculatorBackground();
         this.createCalculatorButtons();
        // this.createCalculatorDisplayBackground();
        // this.calcuatorDisplayEmptyDigits();
        // this.createCalculatorDisplayNumericals();
        // this.createClaculatorDisplayFrontCover();
        // this.createMetalStrip();
        // this.createElkaLabel();
        this.createPowerButton();
    }

    //TODO ADD DESTROY LOGIC
    // public createButtons(buttonArray: any) {
    //     buttonArray.forEach((element: any) => {
    //         this.buttonContainer.addChild(element);
    //     })

    //     this.container.addChild(this.buttonContainer)
    //     //this.backgroundContainer.addChild(this.calcuatorBackground)
    //     this.backgroundContainer.addChild(this.container)
    //     this.addChild(this.backgroundContainer)
    // }
    private createButtons() {
       this.calculatorView = new CalculatorFactory(elka103).returnView();
//console.log(calcView.returnView())
//calcView.display.setdisplay
        //this.container.addChild(calcView.returnView())
        //this.container.
        //this.backgroundContainer.addChild(this.calcuatorBackground)
        //this.backgroundContainer.addChild(this.container)
       // this.container.x =800;
       // this.container.y =100;
        this.calculatorView.x = 800;
        this.calculatorView.y = 100;

    this.addChild( this.calculatorView)
    }
//TUKA PRAVIH NQkAkwvi neshta snoshti i ne pomnq seti se sam kavaLLLLLLL promenih ot konstanta na globana
    public updateCalculatorDisplay(data: any) {
        console.log(this.calculatorView)
        // this.calculatorView.children[2].setdisplay(data)
        //  this.displayNumerics.text = data;
        //  this.displayNumerics.alpha = 0;
        //  gsap.to(this.displayNumerics, {alpha:1, duration:0.5})
    }

//     private createCalculatorDisplayBackground() {
//         const gfx: PIXI.Graphics = new PIXI.Graphics();
//         gfx.beginFill(0x171717);
//         gfx.drawRoundedRect(0, 0, 230, 50,5);
//         gfx.endFill();
//         const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
//         this.calculatorDisplay = new PIXI.Sprite(texture);
//         this.calculatorDisplay.y = 0// (this.calculatorDisplay.height * 0.8) - this.container.y;
//         this.container.addChild(this.calculatorDisplay);
//     }

//     private createClaculatorDisplayFrontCover() {
//         const gfx: PIXI.Graphics = new PIXI.Graphics();
//         gfx.beginFill(0x750000);
//         gfx.drawRoundedRect(0, 0, this.calculatorDisplay.width, this.calculatorDisplay.height,5);
//         gfx.endFill();
//         const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
//         this.calculatorDisplayCover = new PIXI.Sprite(texture);
//        // this.calculatorDisplayCover.y = (this.calculatorDisplay.height * 0.8) - this.container.y;
//         this.calculatorDisplayCover.alpha = 0.25;
//         this.calculatorDisplay.addChild(this.calculatorDisplayCover);
//     }

//     private calcuatorDisplayEmptyDigits() {
//         this.displayNumericsEmpty = new PIXI.Text("888888888888");
//         this.displayNumericsEmpty.style = new TextStyle({
//         fill: 0x000000,
//         fontFamily: 'Digital-7',
//         fontSize: 40,
// })
//         this.displayNumericsEmpty.anchor.set(1,0.5);
//         this.displayNumericsEmpty.x = this.calculatorDisplay.width;
//         this.displayNumericsEmpty.y = this.calculatorDisplay.height/2;
//         this.displayNumericsEmpty.resolution = 10;
//         this.calculatorDisplay.addChild(this.displayNumericsEmpty);
//     }

//     private createCalculatorDisplayNumericals() {
//         this.displayNumerics = new PIXI.Text("0");
//         this.displayNumerics.style = new TextStyle({
//         fill: 0xFF0000,
//         fontFamily: 'Digital-7',
//         fontSize: 40,
// })
// //     const glowFilter = new GlowFilter({
// //         distance: 10,
// //         outerStrength: 2,
// //         color: 0x750000,
// // });
// //         this.displayNumerics.filters = [glowFilter as unknown as PIXI.Filter];
//         this.displayNumerics.anchor.set(1,0.5);
//         this.displayNumerics.x = this.calculatorDisplay.width;
//         this.displayNumerics.y = this.calculatorDisplay.height/2;
//         this.displayNumerics.resolution = 10;
//         //this.displayNumerics.alpha = 0;
//         // gsap.to(this.displayNumerics, {alpha:1, duration:2})
//         this.calculatorDisplay.addChild(this.displayNumerics);
//     }

//     private createMetalStrip() {
//         const texture: PIXI.Texture = PIXI.Texture.from('../assets/image/aluminum.jpg');
//         this.metalStrip= new PIXI.Sprite(texture);
//         this.metalStrip.x=-10
//         this.metalStrip.y = 60;
//         this.metalStrip.height = 50;
//         this.metalStrip.width = 250;
//         this.container.addChild(this.metalStrip);
//     }

//     private createCalculatorBackground() {
//         const gfx:PIXI.Graphics = new PIXI.Graphics();
//         gfx.beginFill(0x000000);
//         gfx.drawRoundedRect(0,0,250,480,10);
//         gfx.endFill();
//         const texture:PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
//         this.calcuatorBackground = new PIXI.Sprite(texture);
//         this.backgroundContainer.addChild(this.calcuatorBackground)
//     }

//     private createCalculatorOutline() {
//         const gfx:PIXI.Graphics = new PIXI.Graphics();
//         gfx.beginFill(0xFF5733);
//         gfx.drawRoundedRect(0,0,260,485,10);
//         gfx.endFill();
//         const texture:PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
//         const createCalculatorOutline = new PIXI.Sprite(texture);
//         createCalculatorOutline.x =-5
//         createCalculatorOutline.y =-5
//         this.backgroundContainer.addChild(createCalculatorOutline)
//     }

//     private createElkaLabel() {
//        const label = new PIXI.Text("elka 103p");   
//        const style = new TextStyle({
//        fill: 0xffffff,
//        fontFamily: 'Recharge Rg',
//        fontSize: 35,
// })
//        label.style = style;
//        label.x = 100;
//        label.y = 430;
//        this.calcuatorBackground.addChild(label)
//     }

    private createCalculatorButtons() {
        const btn: BasicCalculatorButton = new BasicCalculatorButton("Elka 101", 550, 50)
        this.addChild(btn);
    }

    private createPowerButton(){
        const powerButton: OnOffButton = new OnOffButton();
        powerButton.x = 20
        powerButton.y = 20
       // this.metalStrip.addChild(powerButton);
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


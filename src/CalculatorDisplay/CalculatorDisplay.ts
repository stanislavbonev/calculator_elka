import * as PIXI from 'pixi.js';
import { TextStyle } from 'pixi.js';
import { GameApplication } from "../GameApplication";
import { EventDispatcher } from '../EventDispatcher';
import { CalculatorEvents } from '../CalculatorEvents';
import gsap from 'gsap';

export class CalculatorDisplay extends PIXI.Container {

    private container:PIXI.Container;
    private calculatorDisplay:PIXI.Sprite;
    private displayNumericsEmpty:PIXI.Text;
    private displayNumerics:PIXI.Text;

    private displayWidth:number;
    private displayHeight:number;
    private displayRadius:number;
    private positionX:number
    private positionY:number
    private digitsColor:number;
    private frontCoverColor:number;

    private maxDigits:number;

    constructor(
        displayWidth:number,
        displayHeight:number,
        displayRadius:number,
        digitsColor:number,
        frontCoverColor:number,
        maxDigits:number,
        positionX:number,
        positionY:number
        ) {
        super();

        this.displayWidth = displayWidth;
        this.displayHeight = displayHeight;
        this.displayRadius = displayRadius;
        this.digitsColor = digitsColor;
        this.frontCoverColor = frontCoverColor;
        this.maxDigits = maxDigits;
        this.positionX = positionX;
        this.positionY = positionY;

this.init()
    }

    private init(){
                    this.container = new PIXI.Container()
                     this.container.x = this.positionX
                     this.container.y = this.positionY
            this.addChild(this.container)

        this.createCalculatorDisplayBackground();
        this.calcuatorDisplayEmptyDigits();
        this.createCalculatorDisplayNumericals();
        this.createClaculatorDisplayFrontCover();

        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.UPDATE_DISPLAY, this.setDislay.bind(this));
    }
//public setdisplay(){}
    private createCalculatorDisplayBackground() {
        const gfx: PIXI.Graphics = new PIXI.Graphics();
        gfx.beginFill(0x171717);
        gfx.drawRoundedRect(0, 0,this.displayWidth,this.displayHeight,this.displayRadius);
        //gfx.drawRoundedRect(0, 0, 230, 50,5);
        gfx.endFill();
        const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
        this.calculatorDisplay = new PIXI.Sprite(texture);
        this.calculatorDisplay.y = 0// (this.calculatorDisplay.height * 0.8) - this.container.y;
        this.container.addChild(this.calculatorDisplay);
        //this.addChild(this.container);
    }

    private createClaculatorDisplayFrontCover() {
        const gfx: PIXI.Graphics = new PIXI.Graphics();
        gfx.beginFill(this.frontCoverColor);
        //gfx.beginFill(0x750000);
        gfx.drawRoundedRect(0, 0, this.calculatorDisplay.width, this.calculatorDisplay.height,this.displayRadius);
        gfx.endFill();
        const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
        const calculatorDisplayCover = new PIXI.Sprite(texture);
       // this.calculatorDisplayCover.y = (this.calculatorDisplay.height * 0.8) - this.container.y;
        calculatorDisplayCover.alpha = 0.25;
        this.calculatorDisplay.addChild(calculatorDisplayCover);
    }

    private calcuatorDisplayEmptyDigits() {
        let digits:string = '';
        for(let i = 0; i <= this.maxDigits; i++){
            digits += "8"
        }

        this.displayNumericsEmpty = new PIXI.Text(digits);
        this.displayNumericsEmpty.style = new TextStyle({
        fill: 0x000000,
        fontFamily: 'Digital-7',
        fontSize: 40,
})
        this.displayNumericsEmpty.anchor.set(1,0.5);
        this.displayNumericsEmpty.x = this.calculatorDisplay.width;
        this.displayNumericsEmpty.y = this.calculatorDisplay.height / 2;
        this.displayNumericsEmpty.resolution = 10;
        this.calculatorDisplay.addChild(this.displayNumericsEmpty);
    }

    private createCalculatorDisplayNumericals() {
        this.displayNumerics = new PIXI.Text("0");
        this.displayNumerics.style = new TextStyle({
        fill: this.digitsColor,
        //fill: 0xFF0000,
        fontFamily: 'Digital-7',
        fontSize: 40,
})
//     const glowFilter = new GlowFilter({
//         distance: 10,
//         outerStrength: 2,
//         color: 0x750000,
// });
//         this.displayNumerics.filters = [glowFilter as unknown as PIXI.Filter];
        this.displayNumerics.anchor.set(1,0.5);
        this.displayNumerics.x = this.calculatorDisplay.width;
        this.displayNumerics.y = this.calculatorDisplay.height / 2;
        this.displayNumerics.resolution = 10;
        //this.displayNumerics.alpha = 0;
        // gsap.to(this.displayNumerics, {alpha:1, duration:2})
        this.calculatorDisplay.addChild(this.displayNumerics);
    }

    public setDislay(data:any){
        this.displayNumerics.text = data;
       this.displayNumerics.alpha = 0;
        gsap.to(this.displayNumerics, {alpha:1, duration:0.5})
    }
}
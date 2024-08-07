import * as PIXI from 'pixi.js';
import { GameApplication } from "../GameApplication";
import { BaseButton } from "./BaseButton";
import { EventDispatcher } from "../EventDispatcher";
import { CalculatorEvents } from "../CalculatorEvents";

export class OperatorButton extends BaseButton {
    private button: PIXI.Sprite;
    private buttonText: PIXI.Text;
    private buttonContainer: PIXI.Container;
    private label: string | number;
    private xPos: number;
    private yPos: number;
    private color: number;

    constructor(label: string | number, x: number, y: number,color:number) {
        super();
        this.label = label;
        this.xPos = x;
        this.yPos = y;
        this.color = color;
        this.init();
    }

    protected init() {
        this.buttonContainer = new PIXI.Container();
        this.addChild(this.buttonContainer);

        this.createGap();
        this.createButton();
        this.createLabel();
  
        this.button.on('click', this.onClick, this)
    }
    //TODO IMPROVE INHERITANCE FROM BASE BUTTON REPEATABLE CODE FOR BUTTON APEARENCE
    protected createButton() {
        const gfx: PIXI.Graphics = new PIXI.Graphics();
        gfx.beginFill(this.color);
        gfx.drawRoundedRect(0, 0, 50, 50, 10);
        gfx.endFill();
        const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
        this.button = new PIXI.Sprite(texture);
        this.button.x = this.xPos;
        this.button.y = this.yPos;
        this.button.scale.set(0.98);
        this.button.interactive = true;
        this.buttonContainer.addChild(this.button);
    }

    protected createLabel() {
        this.buttonText = new PIXI.Text(this.label, {
            fill: 0x000000,
            fontSize: 20,
        })
        this.buttonText.anchor.set(0.5)
        this.buttonText.x = this.button.width / 2;
        this.buttonText.y = this.button.height / 2;
        this.button.addChild(this.buttonText);
    }

    protected onClick(): void {
         EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.OPERATOR_BUTTON_PRESSED, this.label);
    }

    private createGap(){
        const gfx: PIXI.Graphics = new PIXI.Graphics();
        gfx.beginFill(0x808080);
        gfx.drawRoundedRect(0, 0, 52, 52, 10);
        gfx.endFill();
        const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
        const gap = new PIXI.Sprite(texture);
        gap.x = this.xPos;
        gap.y = this.yPos;
        this.buttonContainer.addChild(gap);
    }
}
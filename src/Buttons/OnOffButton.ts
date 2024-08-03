import * as PIXI from 'pixi.js';
import { GameApplication } from "../GameApplication";
import { BaseButton } from "./BaseButton";
import { EventDispatcher } from "../EventDispatcher";
import { CalculatorEvents } from "../CalculatorEvents";

export class OnOffButton extends BaseButton {
    private button: PIXI.Sprite;
    private buttonClicked:boolean = false;
    private buttonContainer: PIXI.Container;
    private label: string;
    private xPos: number;
    private yPos: number;

    constructor() {
        super();
        // this.xPos = x;
        // this.yPos = y;
        this.init();
    }

    protected init() {
        this.buttonContainer = new PIXI.Container();
        this.addChild(this.buttonContainer);

        this.createGap();
        this.createButton();
        this.createLabel();
        this.onHover();
        this.button.on('click', this.onClick, this)
    }
    //TODO IMPROVE INHERITANCE FROM BASE BUTTON REPEATABLE CODE FOR BUTTON APEARENCE
    protected createButton() {
        const gfx: PIXI.Graphics = new PIXI.Graphics();
        gfx.beginFill(0x222222);
        gfx.drawRect(0, 0, 20, 50);
        gfx.endFill();
        const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
        this.button = new PIXI.Sprite(texture);
        // this.button.x = this.xPos;
        // this.button.y = this.yPos;
        this.button.scale.set(0.98);
        this.button.interactive = true;
        this.buttonContainer.addChild(this.button);
    }

    protected onClick(): void {
        this.buttonClicked = !this.buttonClicked;
        EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.POWER_BUTTON_PRESSED, this.buttonClicked);
        this.button.x = this.buttonClicked ? this.button.x + this.button.width : this.button.x - this.button.width;
    }

    private createGap() {
        const gfx: PIXI.Graphics = new PIXI.Graphics();
        gfx.beginFill(0x808080);
        gfx.drawRect(0, 0, 40, 52);
        gfx.endFill();
        const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
        const gap = new PIXI.Sprite(texture);
        // gap.x = this.xPos;
        // gap.y = this.yPos;
        this.buttonContainer.addChild(gap);
    }
}
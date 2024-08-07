import * as PIXI from 'pixi.js';
import { GameApplication } from "../GameApplication";
import { IElkaCalculator } from '../Interfaces';

export class CalculatorBackground extends PIXI.Container {

  private backgroundContainer:PIXI.Container;
 
  private backgroundWidth:number;
  private backgroundHeight:number;
  private backgroundColor:number;
  private backgroundRadius:number;
  private backgroundPosY:number;

  private outlineWidth:number;
  private outlineHeight:number;
  private outlineRadius:number;
  private outlineColor:number;
  private metalStrip: PIXI.Sprite;

  constructor(data:IElkaCalculator) {
    super();
    this.backgroundWidth = data.background.backgroundWidth;
    this.backgroundHeight = data.background.backgroundHeight;
    this.backgroundColor = data.background.backgroundColor;
    this.backgroundRadius = data.background.backgroundRadius;
    this.backgroundPosY = data.background.backgroundPosY;

    this.outlineWidth = data.background.outlineWidth;
    this.outlineHeight = data.background.outlineHeight;
    this.outlineRadius = data.background.outlineRadius;
    this.outlineColor = data.background.outlineColor;

    this.init();
  }

  private init(){
    this.backgroundContainer = new PIXI.Container()
    this.addChild(this.backgroundContainer)

    this.createCalculatorOutline();
    this.createCalculatorBackground();
    this.createMetalStrip();
  }

    private createCalculatorBackground() {
        const gfx:PIXI.Graphics = new PIXI.Graphics();
        gfx.beginFill(this.backgroundColor);
        gfx.drawRoundedRect(0,0,
            this.backgroundWidth,
            this.backgroundHeight,
            this.backgroundRadius
            );
        gfx.endFill();
        const texture:PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
        const calcuatorBackground:PIXI.Sprite = new PIXI.Sprite(texture);
        if(this.backgroundPosY) {
          calcuatorBackground.y = this.backgroundPosY
        }
        this.backgroundContainer.addChild(calcuatorBackground)
    }

    private createCalculatorOutline() {
        const gfx:PIXI.Graphics = new PIXI.Graphics();
        gfx.beginFill(this.outlineColor);
        gfx.drawRoundedRect(0,0,
            this.outlineWidth,
            this.outlineHeight,
            this.outlineRadius);
        gfx.endFill();
        const texture:PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
        const createCalculatorOutline = new PIXI.Sprite(texture);
        createCalculatorOutline.x =-5
        createCalculatorOutline.y =-5
        this.backgroundContainer.addChild(createCalculatorOutline)
    }

        private createMetalStrip() {
        const texture: PIXI.Texture = PIXI.Texture.from('../assets/image/aluminum.jpg');
        this.metalStrip= new PIXI.Sprite(texture);
        this.metalStrip.y = 80;
        this.metalStrip.height = 50;
        this.metalStrip.width = 250;
        this.backgroundContainer.addChild(this.metalStrip);
    }
}
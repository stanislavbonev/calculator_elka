import * as PIXI from 'pixi.js';
import { GameApplication } from "../GameApplication";
import { IElkaCalculator } from '../Interfaces';

export class CalculatorBackground extends PIXI.Container {

  private backgroundContainer: PIXI.Container;
  private backgroundColor: number;
  private metalStrip: PIXI.Sprite;
  private data: IElkaCalculator;

  constructor(data: IElkaCalculator) {
    super();
    this.data = data;
    this.init();
  }

  private init() {
    this.backgroundContainer = new PIXI.Container()
    this.addChild(this.backgroundContainer)

    this.createCalculatorOutline();
    this.createCalculatorBackground();
    this.createMetalStrip();
  }

  private createCalculatorBackground() {
    const gfx: PIXI.Graphics = new PIXI.Graphics();
    gfx.beginFill(this.backgroundColor);
    gfx.drawRoundedRect(0, 0,
      this.data.background.backgroundWidth,
      this.data.background.backgroundHeight,
      this.data.background.backgroundRadius
    );
    gfx.endFill();
    const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
    const calcuatorBackground: PIXI.Sprite = new PIXI.Sprite(texture);
    if (this.data.background.backgroundPosY) {
      calcuatorBackground.y = this.data.background.backgroundPosY
    }
    this.backgroundContainer.addChild(calcuatorBackground)
  }

  private createCalculatorOutline() {
    const gfx: PIXI.Graphics = new PIXI.Graphics();
    gfx.beginFill(this.data.background.outlineColor);
    gfx.drawRoundedRect(0, 0,
      this.data.background.outlineWidth,
      this.data.background.outlineHeight,
      this.data.background.outlineRadius
    );
    gfx.endFill();
    const texture: PIXI.Texture = GameApplication.getApp().renderer.generateTexture(gfx);
    const createCalculatorOutline = new PIXI.Sprite(texture);
    createCalculatorOutline.x = -5
    createCalculatorOutline.y = -5
    this.backgroundContainer.addChild(createCalculatorOutline)
  }

  private createMetalStrip() {
    const texture: PIXI.Texture = PIXI.Texture.from('../assets/image/aluminum.jpg');
    this.metalStrip = new PIXI.Sprite(texture);
    this.metalStrip.y = 80;
    this.metalStrip.height = 50;
    this.metalStrip.width = 250;
    this.backgroundContainer.addChild(this.metalStrip);
  }
}
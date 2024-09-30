import * as PIXI from 'pixi.js';
import { CalculatorView } from "./CalculatorView/CalculatorView";
import { CalculatorController } from './CalculatorController/CalculatorController';
import { CalculatorModel } from './CalculatorModel/CalculatorModel';
import { BasicCalculatorButton } from './Buttons/MenuButtons.ts/BasicCalculatorButton';
import { resizeContainer } from './ResizeManager';
import { CalculatorEvents } from './CalculatorEvents';
import { EventDispatcher } from './EventDispatcher';
export class GameApplication extends PIXI.Application {

    private static app: GameApplication;
    private mainContainer: PIXI.Container;
    private calcView: CalculatorView

    constructor() {
        super(GameApplication.getAppOptions());
        this.init();
        window.addEventListener("resize", this.resizeCanvas.bind(this));
        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.BASIC_CALCULATOR_BUTTON_PRESSED, this.resizeCanvas, this)
    }

    public static getApp(): GameApplication {
        return this.app;
    }

    private init() {
        (globalThis as any).__PIXI_APP__ = this;
        GameApplication.app = this;
        this.mainContainer = new PIXI.Container();
        this.mainContainer.name = 'ALOOOOU'
        this.mainContainer.x = window.screen.availWidth / 2
        this.mainContainer.y = window.screen.availHeight / 2

        this.loader = new PIXI.Loader();

        this.onLoadComplete();

        window.onload = () => {
            const gameContainer: HTMLCanvasElement = document.getElementById("gameContainer") as HTMLCanvasElement;
            gameContainer.appendChild(this.view);
            this.stage.addChild(this.mainContainer);
            // document.documentElement.requestFullscreen()
            this.resizeCanvas();
            this.loadAssets();

            document.body.style.margin = '0';
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';

            this.view.style.position = 'absolute';
            this.view.style.left = '50%';
            this.view.style.top = '50%';
            this.view.style.transform = 'translate3d( -50%, -50%, 0 )';
            this.resizeCanvas();
        };
    }

    private static getAppOptions() {
        return {
            backgroundColor: 0x808080,
            resizeTo: window,
            autoDensity: true,
        }
    }

    private resizeCanvas(): void {
        this.renderer.resize(document.documentElement.clientWidth, document.documentElement.clientHeight);
        resizeContainer(this.mainContainer);
    }

    private loadAssets() {

    }

    private onLoadComplete() {
        const btn: BasicCalculatorButton = new BasicCalculatorButton("Elka 101", 0, 0)
        this.stage.addChild(btn);

        new CalculatorController();
        new CalculatorModel();
        this.calcView = new CalculatorView();
        this.mainContainer.addChild(this.calcView);
    }

}
import * as PIXI from 'pixi.js';
import { CalculatorView } from "./CalculatorView/CalculatorView";
import { CalculatorController } from './CalculatorController/CalculatorController';
import { CalculatorModel } from './CalculatorModel/CalculatorModel';
import { BasicCalculatorButton } from './Buttons/BasicCalculatorButton';

export class GameApplication extends PIXI.Application {

    public static STAGE_WIDTH: number = 2048;
    public static STAGE_HEIGHT: number = 2048;

    private static app: GameApplication;
    private mainContainer: PIXI.Container;
    private controller: CalculatorController;
    private scale: number;
    private calcView: any
    constructor() {
        super(GameApplication.getAppOptions());
        this.init();
    }

    public static getApp(): GameApplication {
        return this.app;
    }

    private init() {
        (globalThis as any).__PIXI_APP__ = this;
        GameApplication.app = this;
        this.mainContainer = new PIXI.Container();
        this.mainContainer.name = 'ALOOOOU'
        this.mainContainer.width = 2048
        this.mainContainer.height = 2048
        this.loader = new PIXI.Loader();

        this.onLoadComplete();

        window.onload = () => {
            const gameContainer: HTMLCanvasElement = document.getElementById("gameContainer") as HTMLCanvasElement;
            gameContainer.appendChild(this.view);
            this.stage.addChild(this.mainContainer);

            this.resizeCanvas();
            this.loadAssets();
            this.view.style.position = 'absolute';
            this.view.style.left = '50%';
            this.view.style.top = '50%';
            this.view.style.transform = 'translate3d( -50%, -50%, 0 )';
        };
    }

    private static getAppOptions() {
        return {
            backgroundColor: 0x808080,
            resizeTo: window
            // width: window.screen.availWidth,
            // height: window.screen.availHeight,
            // width: GameApplication.STAGE_WIDTH,
            //  height: GameApplication.STAGE_HEIGHT,
        }
    }

    private resizeCanvas(): void {
        const resize = () => {
            // this.renderer.resize(GameApplication.STAGE_WIDTH, GameApplication.STAGE_HEIGHT);
            this.renderer.resize(window.innerWidth, window.innerHeight);
            console.log(this.mainContainer.width)
            console.log(this.mainContainer.height)
            this.mainContainer.x = window.innerWidth / 2
            this.mainContainer.y = window.innerHeight / 2
            const scaleX = window.innerWidth / 495;
            const scaleY = window.innerHeight / 485;

            const scale = Math.min(scaleX, scaleY);

            // Apply the scale to the stage
            this.mainContainer.scale.set(scale);
            //this.mainContainer.scale.set(scale);
        };

        resize();

        window.addEventListener("resize", resize.bind(this));
    }

    private loadAssets() {
        //   this.loader.add('Digital-7', './assets/fonts/digital-7.ttf');
    }

    private onLoadComplete() {
        const btn: BasicCalculatorButton = new BasicCalculatorButton("Elka 101", 0, 0)
        btn.y = -350
        this.mainContainer.addChild(btn);
        const controller = new CalculatorController();
        const model: CalculatorModel = new CalculatorModel();
        //  const view: CalculatorView = new CalculatorView();
        this.calcView = new CalculatorView();

        this.mainContainer.addChild(this.calcView);
        //this.mainContainer.addChild(view);
        //this.enterFullscreen()
    }

    private enterFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    }

}
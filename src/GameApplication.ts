import * as PIXI from 'pixi.js';
import { CalculatorView } from "./CalculatorView/CalculatorView";
import { CalculatorController } from './CalculatorController/CalculatorController';
import { CalculatorModel } from './CalculatorModel/CalculatorModel';
import { BasicCalculatorButton } from './Buttons/BasicCalculatorButton';
import { resizeContainer } from './ResizeManager';
export class GameApplication extends PIXI.Application {

    public static STAGE_WIDTH: number = 800;
    public static STAGE_HEIGHT: number = 600;

    private static app: GameApplication;
    private mainContainer: PIXI.Container;
    private controller: CalculatorController;
    private scale: number;
    private calcView:PIXI.Container
    constructor() {
        super(GameApplication.getAppOptions());
        this.init();
        window.addEventListener("resize", this.resizeCanvas.bind(this));
    }

    public static getApp(): GameApplication {
        return this.app;
    }

    private init() {
        (globalThis as any).__PIXI_APP__ = this; 
        GameApplication.app = this;
        this.mainContainer = new PIXI.Container();
        this.mainContainer.name = 'ALOOOOU'
         this.mainContainer.x =  window.screen.availWidth  / 2
         this.mainContainer.y =  window.screen.availHeight  / 2

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
        };
    }

    private static getAppOptions() {
        return {
            backgroundColor: 0x808080,
               //resizeTo:window
            //  width: window.screen.availWidth,
            //   height: window.screen.availHeight,
            // width: GameApplication.STAGE_WIDTH,
            //  height: GameApplication.STAGE_HEIGHT,
            width: document.documentElement.clientWidth,        // CSS width of the window
            height: document.documentElement.clientHeight,      // CSS height of the window
            resolution: window.devicePixelRatio || 1,  // Automatically handle high-DPI screens
            autoDensity: true,               // Makes the canvas density-aware for high-DPI sc
        }
    }

    private resizeCanvas(): void {
const dpr = window.devicePixelRatio


            this.renderer.resize(document.documentElement.clientWidth , document.documentElement.clientHeight);
 
            resizeContainer(this.mainContainer)
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
import * as PIXI from 'pixi.js';
import { CalculatorView } from "./CalculatorView/CalculatorView";
import { CalculatorController } from './CalculatorController/CalculatorController';
import { CalculatorModel } from './CalculatorModel/CalculatorModel';

export class GameApplication extends PIXI.Application {

    public static STAGE_WIDTH: number = 1280;
    public static STAGE_HEIGHT: number = 768;

    private static app: GameApplication;
    private mainContainer: PIXI.Container;
    private controller: CalculatorController;

    constructor() {
        super(GameApplication.getAppOptions());
        this.init();
    }

    public static getApp(): GameApplication {
        return this.app;
    }

    private init() {
        GameApplication.app = this;
        this.mainContainer = new PIXI.Container();
       
        this.loader = new PIXI.Loader();
        const texture: PIXI.Texture = PIXI.Texture.from('./assets/image/fidel_jivkov_1.jpg');
        const TodorJivkov= new PIXI.Sprite(texture);
        TodorJivkov.x=70;
        TodorJivkov.y=90;
        TodorJivkov.scale.set(0.8);
        const textre1:PIXI.Texture = PIXI.Texture.from('./assets/image/empty_frame.png');
        const frame=new PIXI.Sprite(textre1)
        frame.width=500
        frame.height = 600
       
        this.mainContainer.addChild(TodorJivkov);
        this.mainContainer.addChild(frame);
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
            width: GameApplication.STAGE_WIDTH,
            height: GameApplication.STAGE_HEIGHT,
        }
    }

    private resizeCanvas(): void {
        const resize = () => {
            this.renderer.resize(GameApplication.STAGE_WIDTH, GameApplication.STAGE_HEIGHT);
        };

        resize();

        window.addEventListener("resize", resize);
    }

    private loadAssets() {
        
    }

    private onLoadComplete() {
        const model: CalculatorModel = new CalculatorModel();
        const view: CalculatorView = new CalculatorView();
        const controller = new CalculatorController(model,view,);
        this.mainContainer.addChild(controller);
    }

}
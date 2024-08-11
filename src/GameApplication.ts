import * as PIXI from 'pixi.js';
import { CalculatorView } from "./CalculatorView/CalculatorView";
import { CalculatorController } from './CalculatorController/CalculatorController';
import { CalculatorModel } from './CalculatorModel/CalculatorModel';

export class GameApplication extends PIXI.Application {

    public static STAGE_WIDTH: number = 800;
    public static STAGE_HEIGHT: number = 600;

    private static app: GameApplication;
    private mainContainer: PIXI.Container;
    private controller: CalculatorController;
    private scale: number;
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
    //    this.stage.scale.set(this.scale)

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
           resizeTo:window
            // width: GameApplication.STAGE_WIDTH,
            // height: GameApplication.STAGE_HEIGHT,
        }
    }

    private resizeCanvas(): void {
        //let abv
    //    const scaleX = window.innerWidth / GameApplication.getApp().screen.width
    //    const scaleY = window.innerHeight / GameApplication.getApp().screen.height
    //    const scale1 = Math.min(scaleX,scaleY);
    //    console.log(scale1,"LLLLLLLLLLLLLL")
        GameApplication.getApp().screen.height
        const resize = () => {
            //this.renderer.resize(window.innerWidth, window.innerHeight);
             this.renderer.resize(GameApplication.STAGE_WIDTH, GameApplication.STAGE_HEIGHT);
            console.log("RESIZEEEEEEEEEEEEEEEEEEEEE")
           //  this.scale = Math.min(window.screen.availWidth / window.innerWidth, window.screen.availHeight / window.innerHeight)
             console.log(this.scale)
             console.log(window.innerWidth )
             console.log(window.innerHeight )
             console.log(window.screen.availWidth ,"TTTTTTTTTTTTTTTT")
             console.log(window.screen.availHeight ,"TTTTTTTTTTTTTTTT")
            //  this.stage.height = window.screen.availWidth
            //  this.stage.width = window.screen.availWidth

            const scaleX = window.innerWidth / GameApplication.getApp().screen.width
            const scaleY = window.innerHeight / GameApplication.getApp().screen.height
            const scale1 = Math.min(scaleX,scaleY);
            this.mainContainer.scale.set(scale1)

            this.mainContainer.position.set(
                (window.innerWidth -   GameApplication.getApp().screen.width * scale1) / 2,
                (window.innerHeight -   GameApplication.getApp().screen.height * scale1) / 2
            );

        };

        resize();

        window.addEventListener("resize", resize.bind(this));
    }

    private loadAssets() {
        
    }

    private onLoadComplete() {
        const controller = new CalculatorController();
        const model: CalculatorModel = new CalculatorModel();
        const view: CalculatorView = new CalculatorView();

        this.mainContainer.addChild(view);
    }

}
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
    private calcView:any
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

    //    this.mainContainer.addChild(TodorJivkov);
    //    this.mainContainer.addChild(frame);
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
              // resizeTo:window
             width: window.screen.availWidth,
              height: window.screen.availHeight,
            // width: GameApplication.STAGE_WIDTH,
            //  height: GameApplication.STAGE_HEIGHT,
        }
    }

    private resizeCanvas(): void {
        const resize = () => {
            // this.renderer.resize(GameApplication.STAGE_WIDTH, GameApplication.STAGE_HEIGHT);
             this.renderer.resize( window.screen.availWidth, window.screen.availHeight);
             console.log(window.innerWidth )
             console.log(window.innerHeight )
             console.log(window.screen.availWidth ,"TTTTTTTTTTTTTTTT")
             console.log(window.screen.availHeight ,"TTTTTTTTTTTTTTTT")
             console.log(GameApplication.getApp().screen.width,"uuuuuuuuuuuuu")
             console.log(GameApplication.getApp().screen.height ,"iiiiiiiiiiiiiiiii")
            //   this.calcView.x = window.screen.availWidth /2
            //   this.calcView.y = window.screen.availHeight /2
              console.log(this.calcView.width)
              console.log(this.calcView.height)
            this.mainContainer.x =  window.screen.availWidth /2
            this.mainContainer.y =  window.screen.availHeight /2
             const scaleX =   495/window.screen.availWidth;
             const scaleY =   485 /window.screen.availHeight;
             const scale = Math.min(scaleX, scaleY);
            console.log(scale)
             // Apply the scale to the stage
           this.calcView.scale.set(1.2);
            this.mainContainer.scale.set(scale);
        };

        resize();

        window.addEventListener("resize", resize.bind(this));
    }

    private loadAssets() {
        
    }

    private onLoadComplete() {
        const btn: BasicCalculatorButton = new BasicCalculatorButton("Elka 101", 0, 0)
        this.mainContainer.addChild(btn);
        const controller = new CalculatorController();
        const model: CalculatorModel = new CalculatorModel();
      //  const view: CalculatorView = new CalculatorView();
        this.calcView = new CalculatorView();

        this.mainContainer.addChild(this.calcView);
        //this.mainContainer.addChild(view);
    }

}
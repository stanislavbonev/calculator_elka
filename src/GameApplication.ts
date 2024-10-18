import * as PIXI from 'pixi.js';
import { CalculatorView } from "./CalculatorView/CalculatorView";
import { CalculatorController } from './CalculatorController/CalculatorController';
import { CalculatorModel } from './CalculatorModel/CalculatorModel';
import { BasicCalculatorButton } from './Buttons/MenuButtons.ts/BasicCalculatorButton';
import { resizeContainer } from './ResizeManager';
import { CalculatorEvents } from './CalculatorEvents';
import { EventDispatcher } from './EventDispatcher';
import { ViewElement } from './ViewElement';
import { CalculatorMenu } from './HUD/CalculatorMenu';
export class GameApplication extends PIXI.Application {

    private static app: GameApplication;
    private mainContainer: PIXI.Container;
    private calcView: CalculatorView;

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
        this.mainContainer.pivot.set(this.mainContainer.width / 2,this.mainContainer.height / 2);
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
        this.iterateViewElements(this.stage.children);
    }

    private loadAssets() {

    }

    private onLoadComplete() {
        new CalculatorController();
        new CalculatorModel();
        this.calcView = new CalculatorView();

        const menuButtons:string[] = this.calcView.returnRegisterEntries();
        menuButtons.push("Elka101","Elka102","Elka222")
        const menuBtn: CalculatorMenu = new CalculatorMenu(menuButtons);
        
        this.stage.addChild(menuBtn);
        this.stage.addChild(this.calcView);
    }

    private iterateViewElements(element: PIXI.DisplayObject[]): void {
        element.forEach((container: PIXI.DisplayObject) => {
            if(container instanceof ViewElement) {
                resizeContainer(container);  
            }
        })
        EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.POSITION_MENU);
    }

}
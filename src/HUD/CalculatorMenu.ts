import { ViewElement } from "../ViewElement";
import { BasicCalculatorButton } from "../Buttons/MenuButtons.ts/BasicCalculatorButton";
import { isLandscape } from "../ResizeManager";
import { EventDispatcher } from "../EventDispatcher";
import { CalculatorEvents } from "../CalculatorEvents";
   
      enum Button {
        Width = 80,
        Height = 50,
        Offset = 20
        }


export class CalculatorMenu extends ViewElement {

    constructor(private readonly menuButtons: string[]) {
        super();
        this.init();
        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.POSITION_MENU,this.positionButtons.bind(this))
    }

    private init(): void {
        this.createMenu();
        this.positionButtons();

        this.viewDimensions =
        {
            portrait: {
                width: this.children.length * (Button.Width + Button.Offset),
                height: Button.Height,
                positionX: 0.5,
                positionY: 0.05,
                size: 0.9
            },
            landscape: {
                width: Button.Width,
                height: this.children.length * Button.Height,
                positionX: 0.1,
                positionY: 0.5,
                size: 0.5
            }
        }
    }

    private createMenu(): void {
        this.menuButtons.forEach((button:string,index:number) => {
            let menuButton = new BasicCalculatorButton(button,0,0,Button.Width,Button.Height);
            this.addChild(menuButton);
        })
    }

    private positionButtons(): void {
        if(!this.children) {
            return
        }

        this.reCalculatePivotPoint();

      this.children.forEach((button,index) => {
        if(isLandscape()) {
            button.position.set(0,(Button.Height + Button.Offset) * index);
        }else {
            button.position.set((Button.Width + Button.Offset) * index ,0);
        }
      })
    }

    private reCalculatePivotPoint(): void {
        isLandscape() ? 
        this.pivot.set(Button.Width * 0.5, (this.children.length * (Button.Height + Button.Offset * 0.75)) * 0.5) :
        this.pivot.set((this.children.length * (Button.Width + Button.Offset*0.75)) * 0.5 ,Button.Height * 0.5);
    }
}
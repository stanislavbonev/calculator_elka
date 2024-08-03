import { CalculatorEvents } from "../CalculatorEvents";
import { EventDispatcher } from "../EventDispatcher";
import  calcOperations  from "../SimpleBrain/SimpleBrain";

export class CalculatorModel {

    private observers: ((data: any) => void)[] = [];

    private memory: string="0";
    private total: string="0";
    private operator:string="";
    private leftOperand:string="0";
    private rightOperand:string="0";

    private operatorSet:boolean = false;
    private leftOperandSet:boolean = false;
    private rightOperandSet:boolean = false;

    private numbers: number[] = [];
    private stringifiedNumbers: string;

    constructor() { }

    public setOperator(data:string) {

        if(this.leftOperandSet && this.rightOperandSet) {
            this.calculateResult();
            this.operator = data;
            this.numbers = [];
            return
        }

        this.operator = data;
        this.operatorSet = true;
        this.numbers = [];
    }
 
    public getOperator() {
        return this.operator;
    }

    private setTotal(data:string) {

        this.total = data;
        EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.UPDATE_DISPLAY, this.total);
       // this.notifyDisplay(this.total);
    }

    private setLeftOperand(data:string) {
        this.leftOperand = data;
        this.leftOperandSet = true
    }

    public setDisplayData(data: any): void {
        this.memory = this.formatInputKeyboardData(data);

        if(!this.operatorSet) {
            this.leftOperand = this.memory;
            this.leftOperandSet = true;
        }

        if(this.operatorSet){
            this.rightOperand = this.memory
            this.rightOperandSet = true;
        }
        EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.UPDATE_DISPLAY, this.memory);
        //this.notifyDisplay(this.memory);
    }

    public clearMemory() {
        this.memory = "0";
        this.total = "0";
        this.leftOperand ="0";
        this.rightOperand="0";
        this.leftOperandSet = false;
        this.rightOperandSet = false;
        this.operatorSet = false;
        this.numbers = [];
        EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.UPDATE_DISPLAY, this.memory);
      //  this.notifyDisplay(this.memory);
    }

    public calculateResult() {
        let total:number = calcOperations[this.getOperator()](parseFloat(this.leftOperand),parseFloat(this.rightOperand));

        this.setTotal(this.toFixedTrimmed(total,9));
        this.setLeftOperand(total.toFixed(9));

        this.rightOperandSet = false;
        this.numbers = [];
    }

    private formatInputKeyboardData(data: number) {
        this.numbers.push(data);
        this.stringifiedNumbers = this.numbers.join("");
        return this.stringifiedNumbers;
    }

    public addObserver(observer: (data: any) => void): void {
        this.observers.push(observer);
    }

    private notifyDisplay(data:any): void {
        this.observers[0](data);
    }
    private toFixedTrimmed(num:number, digits:number) {
        let str = num.toFixed(digits);
        return str.replace(/\.?0+$/, '');
    }
}
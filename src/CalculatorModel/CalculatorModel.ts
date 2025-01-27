import { CalculatorEvents } from "../CalculatorEvents";
import { EventDispatcher } from "../EventDispatcher";
import { formatInputKeyboardData, toFixedTrimmed } from "../Helpers";
import calcOperations from "../SimpleBrain/SimpleBrain";

export class CalculatorModel {
  private memory: string = "0";
  private total: string = "0";
  private operator: string = "";
  private leftOperand: string = "0";
  private rightOperand: string = "0";

  private operatorSet: boolean = false;
  private leftOperandSet: boolean = false;
  private rightOperandSet: boolean = false;
  private isNegative: boolean = false;

  private numbers: number[] = [];
  private stringifiedNumbers: string;

  constructor() {
    EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.SET_OPERATOR, this.setOperator.bind(this));
    EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.CLEAR_MEMORY, this.clearMemory.bind(this));
    EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.CALCULATE_RESULT, this.calculateResult.bind(this));
    EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.SET_DISPLAY_DATA, this.setDisplayData.bind(this));
  }

  public setOperator(data: string) {
    if (data === "-" && !this.leftOperandSet) {
      this.isNegative = true;
      return;
    }

    if (data === "-" && !this.rightOperandSet && this.leftOperandSet) {
      this.isNegative = true;
      return;
    }

    if (this.leftOperandSet && this.rightOperandSet) {
      this.calculateResult();
      this.operator = data;
      this.numbers = [];
      return;
    }

    this.operator = data;
    this.operatorSet = true;
    this.numbers = [];
  }

  public getOperator() {
    return this.operator;
  }

  private setTotal(data: string) {
    this.memory = data;
    EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.UPDATE_DISPLAY, this.memory);
  }

  private setLeftOperand(data: string) {
    this.leftOperand = data;
    this.leftOperandSet = true;
  }

  public setDisplayData(data: number): void {
    if (this.numbers.length >= 10) {
      return;
    }

    this.memory = formatInputKeyboardData(data, this.numbers);

    if (this.isNegative) {
      this.memory = `-${this.memory}`;
      if (this.leftOperandSet) {
        this.isNegative = false;
      }
    }

    if (!this.operatorSet) {
      this.leftOperand = this.memory;
      this.leftOperandSet = true;
    } else {
      if (this.isNegative) {
        this.memory = `-${this.memory}`;
        if (this.rightOperandSet) {
          this.isNegative = false;
        }
      }

      this.rightOperand = this.memory;
      this.rightOperandSet = true;
    }

    EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.UPDATE_DISPLAY, this.memory);
  }

  public clearMemory() {
    this.memory = "0";
    this.total = "0";
    this.leftOperand = "0";
    this.rightOperand = "0";
    this.operator = "";
    this.leftOperandSet = false;
    this.rightOperandSet = false;
    this.operatorSet = false;
    this.isNegative = false;
    this.numbers = [];
    EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.UPDATE_DISPLAY, this.memory);
  }

  public calculateResult() {
    let total: number = calcOperations[this.getOperator()](
      parseFloat(this.leftOperand),
      parseFloat(this.rightOperand)
    );

    this.setTotal(toFixedTrimmed(total, 9));
    this.setLeftOperand(total.toFixed(9));

    this.rightOperandSet = false;
    this.numbers = [];
  }

  private formatInputKeyboardData(data: number) {
    this.numbers.push(data);
    let stringifiedNumbers: string = this.numbers.join("");
    return stringifiedNumbers;
  }
}

import { CalculatorEvents } from "../CalculatorEvents";
import { EventDispatcher } from "../EventDispatcher";
import calcOperations from "../SimpleBrain/SimpleBrain";

interface CalculatorState {}
export class CalculatorModel {
  private memory: string = "0";
  private total: string = "0";
  private operator: string = "";
  private leftOperand: string = "0";
  private rightOperand: string = "0";

  private operatorSet: boolean = false;
  private leftOperandSet: boolean = false;
  private rightOperandSet: boolean = false;
  private isNegative: boolean = false; // Add this flag to track negative numbers

  private numbers: number[] = [];
  private stringifiedNumbers: string;

  constructor() {
    EventDispatcher.getInstance()
      .getDispatcher()
      .on(CalculatorEvents.SET_OPERATOR, this.setOperator.bind(this));
    EventDispatcher.getInstance()
      .getDispatcher()
      .on(CalculatorEvents.CLEAR_MEMORY, this.clearMemory.bind(this));
    EventDispatcher.getInstance()
      .getDispatcher()
      .on(CalculatorEvents.CALCULATE_RESULT, this.calculateResult.bind(this));
    EventDispatcher.getInstance()
      .getDispatcher()
      .on(CalculatorEvents.SET_DISPLAY_DATA, this.setDisplayData.bind(this));
  }

  public setOperator(data: string) {
    // Handle the case for negative numbers
    if (data === "-" && !this.leftOperandSet) {
      this.isNegative = true; // Mark the next number as negative
      return;
    }

    if (data === "-" && !this.rightOperandSet && this.operatorSet) {
      this.isNegative = true; // Mark the next number as negative
      return;
    }

    // If both operands are set, calculate the result before setting a new operator
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
    //this.total = data;
    this.memory = data;
    console.log(this.memory, "BBBBBBBBBBBBBBBBBBBB");
    //EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.UPDATE_DISPLAY, this.total);
    EventDispatcher.getInstance()
      .getDispatcher()
      .emit(CalculatorEvents.UPDATE_DISPLAY, this.memory);
  }

  private setLeftOperand(data: string) {
    this.leftOperand = data;
    this.leftOperandSet = true;
  }

  public setDisplayData(data: number): void {
    if (this.numbers.length >= 10) {
      return;
    }

    // Format the data input
    this.memory = this.formatInputKeyboardData(data);
    // console.log(this.memory,"aaaaaaaaaaaaaaaaaaaaaaaaaa")
    // Check if the number should be negative
    if (this.isNegative) {
      this.memory = `-${this.memory}`;
      if (this.leftOperandSet) {
        this.isNegative = false;
      }
      // Reset flag after using it
    }

    // Set left or right operand based on operator presence
    if (!this.operatorSet) {
      this.leftOperand = this.memory;
      this.leftOperandSet = true;
    } else {
      if (this.isNegative) {
        this.memory = `-${this.memory}`;
        if (this.rightOperandSet) {
          this.isNegative = false;
        }
        // Reset flag after using it
      }
      this.rightOperand = this.memory;
      this.rightOperandSet = true;
    }
    console.log(this.memory, "aaaaaaaaaaaaaaaaaaaaaaaaaa");
    EventDispatcher.getInstance()
      .getDispatcher()
      .emit(CalculatorEvents.UPDATE_DISPLAY, this.memory);
  }

  public clearMemory() {
    this.memory = "0";
    this.total = "0";
    this.leftOperand = "0";
    this.rightOperand = "0";
    this.leftOperandSet = false;
    this.rightOperandSet = false;
    this.operatorSet = false;
    this.isNegative = false; // Reset negative flag
    this.numbers = [];
    EventDispatcher.getInstance()
      .getDispatcher()
      .emit(CalculatorEvents.UPDATE_DISPLAY, this.memory);
  }

  public calculateResult() {
    let total: number = calcOperations[this.getOperator()](
      parseFloat(this.leftOperand),
      parseFloat(this.rightOperand)
    );

    this.setTotal(this.toFixedTrimmed(total, 9));
    this.setLeftOperand(total.toFixed(9));

    this.rightOperandSet = false;
    this.numbers = [];
  }

  private formatInputKeyboardData(data: number) {
    this.numbers.push(data);
    this.stringifiedNumbers = this.numbers.join("");
    return this.stringifiedNumbers;
  }

  private toFixedTrimmed(num: number, digits: number) {
    let str = num.toFixed(digits);
    return str.replace(/\.?0+$/, "");
  }
}

import { CalculatorEvents } from "../CalculatorEvents";
import { EventDispatcher } from "../EventDispatcher";

export class CalculatorController {

    constructor() {
        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.NUMERIC_BUTTON_PRESSED, this.readNumericButton.bind(this));
        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.OPERATOR_BUTTON_PRESSED, this.readOperatorButton.bind(this));
        EventDispatcher.getInstance().getDispatcher().on(CalculatorEvents.POWER_BUTTON_PRESSED, this.calculatorPower.bind(this));
    }

    private calculatorPower(data: boolean) {
        console.log(data)
    }

    private readNumericButton(data: number) {
        EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.SET_DISPLAY_DATA, data)
    }

    private readOperatorButton(data: string) {

        if (["+", "-", "x", "/"].includes(data)) {
            EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.SET_OPERATOR, data)
        }

        if (data === "C") {
            EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.CLEAR_MEMORY)
        }

        if (data === "=") {
            EventDispatcher.getInstance().getDispatcher().emit(CalculatorEvents.CALCULATE_RESULT)
        }
    }
}
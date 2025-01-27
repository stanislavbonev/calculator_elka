import { Container } from "pixi.js";
import { CalculatorState, IElkaCalculator } from "./Interfaces";
import calcOperations from "./SimpleBrain/SimpleBrain";

export const getViewName = (container: Container): string => {
    if (container.children[0]) {
        return container.children[0].name;
    } else {
        return "No Name"
    }
}

export const getRegister = (register: Map<string, IElkaCalculator>, key: string) => {
    if (!register.get(key)) {
        console.warn("NQMA GO TOZ KLIUCH BA PAPUUUSHH");
    } else {
        return register.get(key);
    }
}

export const formatInputKeyboardData = (data: number, numbers: number[]) => {
    numbers.push(data);
    let stringifiedNumbers = numbers.join("");
    return stringifiedNumbers;
}

export const toFixedTrimmed = (num: number, digits: number) => {
    let str = num.toFixed(digits);
    return str.replace(/\.?0+$/, "");
}
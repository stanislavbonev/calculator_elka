import { Container } from "pixi.js";
import { IElkaCalculator } from "./Interfaces";

export const getViewName = (container: Container): string => {
    if (container.children[0]) {
        return container.children[0].name;
    } else {
        return "No Name"
    }
}

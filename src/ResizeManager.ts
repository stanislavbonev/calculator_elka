import { Container } from "pixi.js"
import { CalculatorView } from "./CalculatorView/CalculatorView";

export const resizeContainer = (container: Container) => {
    const calculatorView = container.children[0] as CalculatorView;

    const viewWidth: number = calculatorView.viewDimensions.width;
    const viewHeight: number = calculatorView.viewDimensions.height;

    console.log(calculatorView.viewDimensions)

    if (calculatorView.children.length > 0) {

        if (!isLandscape) {
            const scaleX = window.innerWidth / viewWidth;
            const scaleY = window.innerHeight / viewHeight;
            const scale = Math.min(scaleX, scaleY) * 0.8;
            container.scale.set(scale);

            container.x = window.innerWidth / 2;
            container.y = window.innerHeight / 2;
        } else {
            const scaleX = window.innerWidth / viewWidth;
            const scaleY = window.innerHeight / viewHeight;
            const scale = Math.min(scaleX, scaleY) * 0.8;
            container.scale.set(scale);

            container.x = window.innerWidth / 2;
            container.y = window.innerHeight / 2;
        }
    }
}

export const isLandscape = () => {
    if (window.innerHeight > window.innerWidth) {
        console.log("Portrait");
        return false;
    } else {
        console.log("Landscape");
        return true;
    }
}




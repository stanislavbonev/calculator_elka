import { Container } from "pixi.js"
import { CalculatorView } from "./CalculatorView/CalculatorView";
import { ViewElement } from "./ViewElement";

export const resizeContainer = (container: Container) => {
    const viewContainer = container as ViewElement;

    if(!viewContainer.viewDimensions) {
        return
    }

    if (viewContainer.children.length > 0) {

        if (!isLandscape()) {
            const viewWidth: number = viewContainer.viewDimensions.portrait.width;
            const viewHeight: number = viewContainer.viewDimensions.portrait.height;
            const viewPositionX: number = viewContainer.viewDimensions.portrait.positionX;
            const viewPositionY: number = viewContainer.viewDimensions.portrait.positionY;
            const viewElementSize: number = viewContainer.viewDimensions.portrait.size;

            const scaleX = window.innerWidth / viewWidth;
            const scaleY = window.innerHeight / viewHeight;
            const scale = Math.min(scaleX, scaleY) * viewElementSize;
            container.scale.set(scale);

            container.x = window.innerWidth * viewPositionX;
            container.y = window.innerHeight * viewPositionY;
        } else {
            const viewWidth: number = viewContainer.viewDimensions.landscape.width;
            const viewHeight: number = viewContainer.viewDimensions.landscape.height;
            const viewPositionX: number = viewContainer.viewDimensions.landscape.positionX;
            const viewPositionY: number = viewContainer.viewDimensions.landscape.positionY;
            const viewElementSize: number = viewContainer.viewDimensions.landscape.size;

            const scaleX = window.innerWidth / viewWidth;
            const scaleY = window.innerHeight / viewHeight;
            const scale = Math.min(scaleX, scaleY) * viewElementSize;
            container.scale.set(scale);

            container.x = window.innerWidth * viewPositionX;
            container.y = window.innerHeight * viewPositionY;
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




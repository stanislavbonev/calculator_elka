import { Container } from "pixi.js"
import { ViewElement } from "./ViewElement";
import { ILayoutDimension } from "./Interfaces";

export const resizeContainer = (container: Container) => {
    const viewContainer = container as ViewElement;

    if(!viewContainer.viewDimensions) {
        return
    }

    const dimensions:ILayoutDimension = isLandscape()
    ? viewContainer.viewDimensions.landscape
    : viewContainer.viewDimensions.portrait;

    applyResizing(container, dimensions);
}

export const applyResizing = (container: Container, dimensions: ILayoutDimension) => {
    const { width, height, positionX, positionY, size } = dimensions;
    
    const scaleX: number = window.innerWidth / width;
    const scaleY: number = window.innerHeight / height;
    const scale: number = Math.min(scaleX, scaleY) * size;
    
    container.scale.set(scale);
    container.x = window.innerWidth * positionX;
    container.y = window.innerHeight * positionY;
    };

export const isLandscape = () => {
    if (window.innerHeight > window.innerWidth) {
        console.log("Portrait");
        return false;
    } else {
        console.log("Landscape");
        return true;
    }
}




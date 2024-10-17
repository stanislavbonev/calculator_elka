export interface Button {
    type: string,
    label: (number | string),
    color: number,
}

export interface Display {
    displayWidth: number,
    displayHeight: number,
    displayRadius: number,
    digitsColor: number,
    frontCoverColor: number,
    maxDigits: number,
    positionX: number,
    positionY: number
}

export interface Background {
    backgroundWidth: number,
    backgroundHeight: number,
    backgroundColor: number,
    backgroundRadius: number,
    backgroundPosX?: number,
    backgroundPosY?: number,
    outlineWidth: number,
    outlineHeight: number,
    outlineRadius: number,
    outlineColor: number
}

export interface IElkaCalculator {
    buttons: Button[],
    buttonsPosX?: number,
    buttonsPosY?: number,
    rows: number,
    columns: number
    display: Display,
    background: Background
    model: string
}

export interface ViewDimensions {
    viewDimensions: { 
        portrait: {
            width: number;
            height: number;
            positionX: number;
            positionY: number; 
            size:number;
        },
        landscape: {
            width: number;
            height: number;
            positionX: number;
            positionY: number; 
            size:number;
        } 
    };
}
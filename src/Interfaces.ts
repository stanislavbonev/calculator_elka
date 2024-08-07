export interface Button {
    type:string,
    label: (number | string),
    color: number,
}

export interface Display {
    displayWidth:number,
    displayHeight:number,
    displayRadius:number,
    digitsColor:number,
    frontCoverColor:number,
    maxDigits:number,
    positionX:number,
    positionY:number
}

export interface Background {
    backgroundWidth:number,
    backgroundHeight:number,
    backgroundColor:number,
    backgroundRadius:number,
    backgroundPosX?:number,
    backgroundPosY?:number,
    outlineWidth:number,
    outlineHeight:number,
    outlineRadius:number,
    outlineColor:number
}

export interface IElkaCalculator {
    buttons: Button[],
    rows: number,
    columns: number
    display: Display,
    background:Background
}
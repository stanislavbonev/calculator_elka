
interface Button {
    type: (number | string),
    color: number,
}

interface Display {
    displayWidth:number,
    displayHeight:number,
    displayRadius:number,
    digitsColor:number,
    frontCoverColor:number,
    maxDigits:number,
    positionX:number,
    positionY:number
}

interface Background {
    backgroundWidth:number,
    backgroundHeight:number,
    backgroundColor:number,
    backgroundRadius:number,
    outlineWidth:number,
    outlineHeight:number,
    outlineRadius:number,
    outlineColor:number
}

export interface Elka103 {
    buttons: Button[],
    rows: number,
    columns: number
    display: Display,
    background:Background
}

enum type {
    Elka103p = 'elka103p'
}
//TODO

 const elka103: Elka103 = {
        buttons: [
        {
            type:"C",
            color:0xFF5733
        },
        {
            type:"√x",
            color:0xffffff
        },
        {
            type:"x^2",
            color:0xffffff
        },
        {
            type:"1/x",
            color:0xffffff
        },
        {
            type:7,
            color:0x232B2B
        },
        {
            type:8,
            color:0x232B2B
        },
        {
            type:9,
            color:0x232B2B
        },
        {
            type:"/",
            color:0xffffff
        },
        {
            type:4,
            color:0x232B2B
        },
        {
            type:5,
            color:0x232B2B
        },
        {
            type:6,
            color:0x232B2B
        },
        {
            type:"x",
            color:0xffffff
        },
        {
            type:1,
            color:0x232B2B
        },
        {
            type:2,
            color:0x232B2B
        },
        {
            type:3,
            color:0x232B2B
        },
        {
            type:"-",
            color:0xffffff
        },
        {
            type:0,
            color:0x232B2B
        },
        {
            type:".",
            color:0xffffff
        },
        {
            type:"=",
            color:0xFF5733   
        },
        {
            type:"+",
            color:0xffffff
        }],
        rows: 5,
        columns: 4,
        display: {
            displayWidth:230,
            displayHeight:50,
            displayRadius:5,
            digitsColor:0xFF0000,
            frontCoverColor:0x750000,
            maxDigits:9,
            positionX: 10,
            positionY: 10,
        },
        background:{
            backgroundWidth:250,
            backgroundHeight:480,
            backgroundColor:0x000000,
            backgroundRadius:10,
            outlineWidth:260,
            outlineHeight:485,
            outlineRadius:10,
            outlineColor:0xFF5733
        }
    }

    
export default elka103;
import { Button } from "../Buttons/ButtonEnums"
import { IElkaCalculator } from "../Interfaces"

 export const elka103: IElkaCalculator = {
        buttons: [
        {   
            type:Button.Operator,
            label:"C",
            color:0xFF5733
        },
        // {
        //     type:'empty',
        //     label:'empty',
        //     color:null
        // },
        {
            type:Button.Operator,
            label:"√x",
            color:0xffffff
        },
        {
            type:Button.Operator,
            label:"x^2",
            color:0xffffff
        },
        {
            type:Button.Operator,
            label:"1/x",
            color:0xffffff
        },
        {
            type:Button.Number,
            label:7,
            color:0x232B2B
        },
        {
            type:Button.Number,
            label:8,
            color:0x232B2B
        },
        {
            type:Button.Number,
            label:9,
            color:0x232B2B
        },
        {
            type:Button.Operator,
            label:"/",
            color:0xffffff
        },
        {
            type:Button.Number,
            label:4,
            color:0x232B2B
        },
        {
            type:Button.Number,
            label:5,
            color:0x232B2B
        },
        {
            type:Button.Number,
            label:6,
            color:0x232B2B
        },
        {
            type:Button.Operator,
            label:"x",
            color:0xffffff
        },
        {
            type:Button.Number,
            label:1,
            color:0x232B2B
        },
        {
            type:Button.Number,
            label:2,
            color:0x232B2B
        },
        {
            type:Button.Number,
            label:3,
            color:0x232B2B
        },
        {
            type:Button.Operator,
            label:"-",
            color:0xffffff
        },
        {
            type:Button.Number,
            label:0,
            color:0x232B2B
        },
        {
            type:Button.Operator,
            label:".",
            color:0xffffff
        },
        {
            type:Button.Operator,
            label:"=",
            color:0xFF5733   
        },
        {
            type:Button.Operator,
            label:"+",
            color:0xffffff
        }],
        rows: 5,
        columns: 4,
        buttonsPosY: 150,
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

    
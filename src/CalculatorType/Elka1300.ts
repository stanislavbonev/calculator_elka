import { IElkaCalculator } from "../Interfaces";
import { Button } from '../Buttons/ButtonEnums'

export const elka1300: IElkaCalculator = {
    buttons: [
        {
            type: Button.Operator,
            label: "CM",
            color: 0x3B3B3B
        },
        {
            type: Button.Empty,
            label: "",
            color: null
        },
        {
            type: Button.Number,
            label: 7,
            color: 0xFF5733
        },
        {
            type: Button.Number,
            label: 8,
            color: 0xFF5733
        },
        {
            type: Button.Number,
            label: 9,
            color: 0xFF5733
        },
        {
            type: Button.Empty,
            label: Button.Empty,
            color: null
        },
        {
            type: Button.Operator,
            label: "C",
            color: 0xFF5733
        },
        {
            type: Button.Operator,
            label: "%",
            color: 0xffffff
        },
        {
            type: Button.Operator,
            label: "MR",
            color: 0x3B3B3B
        },
        {
            type: Button.Empty,
            label: Button.Empty,
            color: null
        },
        {
            type: Button.Number,
            label: 4,
            color: 0xffffff
        },
        {
            type: Button.Number,
            label: 5,
            color: 0x232B2B
        },
        {
            type: Button.Number,
            label: 6,
            color: 0x232B2B
        },
        {
            type: Button.Empty,
            label: Button.Empty,
            color: null
        },
        {
            type: Button.Operator,
            label: "√x",
            color: 0x232B2B
        },
        {
            type: Button.Operator,
            label: "/",
            color: 0xffffff
        },
        {
            type: Button.Operator,
            label: "M-",
            color: 0x3B3B3B
        },
        {
            type: Button.Empty,
            label: Button.Empty,
            color: null
        },
        {
            type: Button.Number,
            label: 1,
            color: 0x232B2B
        },
        {
            type: Button.Number,
            label: 2,
            color: 0x232B2B
        },
        {
            type: Button.Number,
            label: 3,
            color: 0xffffff
        },
        {
            type: Button.Empty,
            label: Button.Empty,
            color: null
        },
        {
            type: Button.Operator,
            label: "-",
            color: 0x232B2B
        },
        {
            type: Button.Operator,
            label: "x",
            color: 0x232B2B
        },
        {
            type: Button.Operator,
            label: "M+",
            color: 0x232B2B
        },
        {
            type: Button.Empty,
            label: Button.Empty,
            color: null
        },
        {
            type: Button.Number,
            label: 0,
            color: 0xffffff
        },
        {
            type: Button.Operator,
            label: ".",
            color: 0xffffff
        },
        {
            type: Button.Empty,
            label: Button.Empty,
            color: null
        },
        {
            type: Button.Empty,
            label: Button.Empty,
            color: null
        },
        {
            type: Button.Operator,
            label: "+",
            color: 0xFF5733
        },
        {
            type: Button.Operator,
            label: "=",
            color: 0xffffff
        },
        {
            type: Button.Empty,
            label: Button.Empty,
            color: null
        }],
    rows: 4,
    columns: 8,
    buttonsPosY: 180,
    display: {
        displayWidth: 230,
        displayHeight: 50,
        displayRadius: 5,
        digitsColor: 0xFF0000,
        frontCoverColor: 0x750000,
        maxDigits: 9,
        positionX: 10,
        positionY: 10,
    },
    background: {
        backgroundWidth: 490,
        backgroundHeight: 300,
        backgroundColor: 0x000000,
        backgroundRadius: 10,
        backgroundPosY: 150,
        outlineWidth: 490,
        outlineHeight: 485,
        outlineRadius: 10,
        outlineColor: 0xFF5733
    },
    model: "Elka1300"
}


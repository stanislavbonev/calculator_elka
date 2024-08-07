
interface Button {
    type:string,
    label: (number | string),
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

enum label {
    Elka103p = 'elka103p'
}
//TODO
export const elka1300: Elka103 = {
    buttons: [
    {   
        type:"operator",
        label:"CM",
        color:0x3B3B3B
    },
    {   
        type:"empty",
        label:"",
        color:null
    },
    {   
        type:"number",
        label:7,
        color:0xFF5733
    },
    {   
        type:"number",
        label:8,
        color:0xFF5733
    },
    {   
        type:"number",
        label:9,
        color:0xFF5733
    },
    {
        type:'empty',
        label:'empty',
        color:null
    },
    {   
        type:"operator",
        label:"C",
        color:0xFF5733
    },
    {
        type:"operator",
        label:"%",
        color:0xffffff
    },
    {
        type:"operator",
        label:"MR",
        color:0x3B3B3B
    },
    {
        type:'empty',
        label:'empty',
        color:null
    },
    {
        type:"number",
        label:4,
        color:0xffffff
    },
    {
        type:"number",
        label:5,
        color:0x232B2B
    },
    {
        type:"number",
        label:6,
        color:0x232B2B
    },
    {
        type:'empty',
        label:'empty',
        color:null
    },
    {
        type:"operator",
        label:"√x",
        color:0x232B2B
    },
    {
        type:"operator",
        label:"/",
        color:0xffffff
    },
    {
        type:"operator",
        label:"M-",
        color:0x3B3B3B
    },
    {
        type:'empty',
        label:'empty',
        color:null
    },
    {
        type:"number",
        label:1,
        color:0x232B2B
    },
    {
        type:"number",
        label:2,
        color:0x232B2B
    },
    {
        type:"number",
        label:3,
        color:0xffffff
    },
    {
        type:'empty',
        label:'empty',
        color:null
    },
    {
        type:"operator",
        label:"-",
        color:0x232B2B
    },
    {
        type:"operator",
        label:"X",
        color:0x232B2B
    },
    {
        type:"operator",
        label:"M+",
        color:0x232B2B
    },
    {
        type:'empty',
        label:'empty',
        color:null
    },
    {
        type:"number",
        label:0,
        color:0xffffff
    },
    {
        type:"operator",
        label:".",
        color:0xffffff
    },
    {
        type:'empty',
        label:'empty',
        color:null
    },
    {
        type:'empty',
        label:'empty',
        color:null
    },
    {
        type:"operator",
        label:"+",
        color:0xFF5733   
    },
    {
        type:"operator",
        label:"=",
        color:0xffffff
    },
    {
        type:'empty',
        label:'empty',
        color:null
    }],
    rows: 4,
    columns: 8,
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
        backgroundWidth:350,
        backgroundHeight:480,
        backgroundColor:0x000000,
        backgroundRadius:10,
        outlineWidth:260,
        outlineHeight:485,
        outlineRadius:10,
        outlineColor:0xFF5733
    }
}


 export const elka103: Elka103 = {
        buttons: [
        {   
            type:"operator",
            label:"C",
            color:0xFF5733
        },
        // {
        //     type:'empty',
        //     label:'empty',
        //     color:null
        // },
        {
            type:"operator",
            label:"√x",
            color:0xffffff
        },
        {
            type:"operator",
            label:"x^2",
            color:0xffffff
        },
        {
            type:"operator",
            label:"1/x",
            color:0xffffff
        },
        {
            type:"number",
            label:7,
            color:0x232B2B
        },
        {
            type:"number",
            label:8,
            color:0x232B2B
        },
        {
            type:"number",
            label:9,
            color:0x232B2B
        },
        {
            type:"operator",
            label:"/",
            color:0xffffff
        },
        {
            type:"number",
            label:4,
            color:0x232B2B
        },
        {
            type:"number",
            label:5,
            color:0x232B2B
        },
        {
            type:"number",
            label:6,
            color:0x232B2B
        },
        {
            type:"operator",
            label:"x",
            color:0xffffff
        },
        {
            type:"number",
            label:1,
            color:0x232B2B
        },
        {
            type:"number",
            label:2,
            color:0x232B2B
        },
        {
            type:"number",
            label:3,
            color:0x232B2B
        },
        {
            type:"operator",
            label:"-",
            color:0xffffff
        },
        {
            type:"number",
            label:0,
            color:0x232B2B
        },
        {
            type:"operator",
            label:".",
            color:0xffffff
        },
        {
            type:"operator",
            label:"=",
            color:0xFF5733   
        },
        {
            type:"operator",
            label:"+",
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

    
// export elka103;
// export default elka1300;
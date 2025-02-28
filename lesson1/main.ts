"use strict";

let a: number = 12;
let b: string = '20';
let c: string = a + b;
let d: boolean = true;
let x: undefined = undefined;
let y: null = null;

//  ----------------------------- union type ----------------------------- //
let str: number | string = "STR"
str = 12;
console.log(str);


let arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
let arr2: string[] = ['1', 'str'];
let arr3: number[] = [1, 2];
let arr4: any = [1, 2, 3, null, "str", undefined, { fName: "Samandar" }, true];

//  ----------------------------- Tuple ----------------------------- //
let arr: [string, number] = ['this is string', 12]
console.log(arr);


console.log(arr3);
console.log(c);
console.log(c.length);



// ----------------------------- Enum ----------------------------- //
enum Colors {
    red,
    green,
    blue,
    orange
}

let myFavColor: Colors = Colors.blue;
console.log(myFavColor);


enum Size {
    sm = 576,
    md = 768,
    lg = 992,
    xl = 1024
}

let screenSize: Size = Size.lg;
console.log(screenSize);



// ----------------------------- type object ----------------------------- //
type userType = {
    fName: string,
    age: number,
    job: string,
    isMerried: boolean,
    noll: null,
    und: undefined
};

const user: userType = {
    fName: "John",
    age: 22,
    job: "Programmer",
    isMerried: true,
    noll: null,
    und: undefined
};

console.log(user);



// ----------------------------- type Aliases ----------------------------- //

type anyType = string | boolean | number;


let data: anyType = 13;
data = 'salom'
data = false

console.log(data);


// ----------------------------- type literal ----------------------------- //

type Position  = "top" | "right" | "bottom" | "left";

let direction:Position = "top"



    
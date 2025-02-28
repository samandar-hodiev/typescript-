"use strict";
var a = 12;
var b = '20';
var c = a + b;
var d = true;
var x = undefined;
var y = null;
//  ----------------------------- union type ----------------------------- //
var str = "STR";
str = 12;
console.log(str);
var arr1 = [1, 2, 3, 4, 5, 6, 7];
var arr2 = ['1', 'str'];
var arr3 = [1, 2];
var arr4 = [1, 2, 3, null, "str", undefined, { fName: "Samandar" }, true];
//  ----------------------------- Tuple ----------------------------- //
var arr = ['this is string', 12];
console.log(arr);
console.log(arr3);
console.log(c);
console.log(c.length);
// ----------------------------- Enum ----------------------------- //
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["blue"] = 2] = "blue";
    Colors[Colors["orange"] = 3] = "orange";
})(Colors || (Colors = {}));
var myFavColor = Colors.blue;
console.log(myFavColor);
var Size;
(function (Size) {
    Size[Size["sm"] = 576] = "sm";
    Size[Size["md"] = 768] = "md";
    Size[Size["lg"] = 992] = "lg";
    Size[Size["xl"] = 1024] = "xl";
})(Size || (Size = {}));
var screenSize = Size.lg;
console.log(screenSize);
var user = {
    fName: "John",
    age: 22,
    job: "Programmer",
    isMerried: true,
    noll: null,
    und: undefined
};
console.log(user);
var data = 13;
data = 'salom';
data = false;
console.log(data);
var direction = "top";

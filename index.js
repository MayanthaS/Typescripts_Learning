"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "change  sanoj";
console.log("Hello, " + name);
//primitive types in typescript
let myname = "Mayantha Sapumal";
let age = 22;
let isStudent = true;
let myundefined = undefined;
let mynull = null;
//array in typescripts
let hobbies = ["Reading", "Traveling", "Gaming"];
let scores = [90, 85, 88];
let mixedArray = ["Hello", 42, "World", 100];
let TDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let fixedarray = ["John", 25, true];
//object in typescript
let person1 = {
    name: "Alice",
    age: 30
};
let person2 = {
    name: "Bob",
    age: 28
};
let person3 = {
    name: "sapumal",
    age: 22,
    hobbies: ["reading", "traveling"]
};
let person4 = {
    name: "sanoj",
    age: 23,
    hobbies: ["gaming", "coding"]
};
//function in typescript
function add(a, b) {
    return a + b;
}
function greet(name) {
    console.log("Hello, " + name);
}
greet("Mayantha");
function getarray(arr) {
    return arr;
}
//anytype in typescript
let myVariable = "Hello";
let anotherVariable = [1, "two", true, { name: "three" }];
//unkonwn type in typescript
let unknownVariable = "Hello World";
// unknownVariable.toUpperCase();
if (typeof unknownVariable === "string") {
    unknownVariable.toUpperCase();
}
unknownVariable.toUpperCase(); //typeassertion
unknownVariable = +"42"; //typecasting to number
//cutome types in typescript
let Emplyee;
Emplyee = {
    id: 1,
    name: "Mayantha",
    isPermanent: true
};
let Myname1 = "sanoj";
let emp1 = {
    id: 1,
    name: "sapumal",
    isPermanent: true
};
// emp1.id=2; //error readonly property cannot be changed/
let direction = "north";
direction = "south";
direction = "north";
function testValue(val) {
    if (typeof val === "string") {
        val.toUpperCase();
    }
    else if (typeof val === "number") {
        val.toFixed(2);
    }
    else {
        return val;
    }
}
testValue("hello");
testValue(42);
function test(val) {
    if (val.type === "circle") {
        // handle circle
    }
    else if (val.type === "square") {
        // handle square
    }
}
let person5 = {
    name: "interface person",
    age: 30
};
//# sourceMappingURL=index.js.map
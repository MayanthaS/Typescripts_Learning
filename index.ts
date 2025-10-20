let name: string = "change  sanoj";
console.log("Hello, " + name);

//primitive types in typescript
let myname: string = "Mayantha Sapumal";
let age: number = 22;
let isStudent: boolean = true;

let myundefined: undefined = undefined;
let mynull: null = null;

//array in typescripts
let hobbies: string[] = ["Reading", "Traveling", "Gaming"];
let scores :number[] = [90, 85, 88];

let mixedArray: (string | number)[] = ["Hello", 42, "World", 100];
let TDArray : number[][] =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let fixedarray: [string, number, boolean] = ["John", 25, true];

//object in typescript
let person1:{name: string; age: number} = {
    name: "Alice",
    age: 30
}
let person2: {name: string; age: number} = {
    name: "Bob",
    age: 28
}

type person = {
    name: string;
    age: number;
    hobbies: string[];
}
let person3:person ={
    name:"sapumal",
    age:22,
    hobbies:["reading","traveling"]
};
let person4:person ={
    name:"sanoj",
    age:23,
    hobbies:["gaming","coding"]
};

//function in typescript
function add(a:number ,b:number):number{
        return a+b;
}
function greet(name:string):void{
    console.log("Hello, " + name);
}
greet("Mayantha");

function getarray(arr:number[]):number[]{
    return arr;
}

//anytype in typescript
let myVariable:any ="Hello";
let anotherVariable:any = [1, "two", true, {name: "three"}];

//unkonwn type in typescript
let unknownVariable: unknown = "Hello World";
// unknownVariable.toUpperCase();

if(typeof unknownVariable==="string"){
    unknownVariable.toUpperCase();
}

(unknownVariable as string).toUpperCase() //typeassertion
unknownVariable = +"42";//typecasting to number

//cutome types in typescript
let Emplyee:{
    id: number;
    name: string;
    isPermanent: boolean;
}
Emplyee = {
    id:1,
    name:"Mayantha",
    isPermanent:true 
}
type MyStringorNumber = string | number;
let Myname1: MyStringorNumber="sanoj";

type myEmployee ={
    readonly id: number;
    name: string;
    isPermanent: boolean;
    address?: string;//optional property {not mandatory to provide this property  }
}
let emp1: myEmployee ={
    id:1,
    name:"sapumal",
    isPermanent:true
};
// emp1.id=2; //error readonly property cannot be changed/

let direction :string = "north";
direction = "south";
// direction = "northeast"; //error not allowed value


type Direction = "north" | "south" | "east" | "west";

direction = "north";

function testValue(val: string | number){
    if(typeof val === "string"){
         val.toUpperCase();
    }else if(typeof val === "number"){
         val.toFixed(2);
    }else{
        return val;
    }
}
testValue("hello");
testValue(42);

//discriminative unions
type Circle ={
    type: "circle";
    radius: number;
}
type Square ={
    type: "square";
    width: number;
    height: number;
}
type Shape = Circle | Square;
function test(val: Shape) {
    if(val.type === "circle"){
        // handle circle
    } else if(val.type === "square") {
        // handle square
    }
}

//Intersection types
type Point2D ={
    x:number;
    y:number;
}
type point3D ={
    x:number;
    y:number;
    z:number;
}

type CustomPoint = Point2D & {
    z:number;
}


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
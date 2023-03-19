// here we are going to explore the concept of arrays in ts

// syntax 
// 1,an array containing numbers

// const myNumbers:number[]=[1,3.4, 67, 67,];
// 2, an array containing strings

const myStrings:string[]=["hello", "how are you", "my name is Ana", "thank you for your time"]

// let newObj={...myStrings};
// console.log(newObj);
myStrings.join("hello");
console.log(myStrings);

//  ANOTHER SYNTAX

const myNewString:Array<string>=["john", "mary","peter", "Alex", "John", "wrester", "Anastasia", "kilo"];

// myNewString.sort((a:string,b:string)=>{
//     return a-b
// }):string[]

// function compareString(a:number, b:number):number{
//     return a-b;
// }


// myNewString.sort(compareString)

// console.log(myNewString);

type User={
    name:string,
    isActive:boolean
}


const allUsers:User[]=[{name:"jude", isActive:false}]


export {}

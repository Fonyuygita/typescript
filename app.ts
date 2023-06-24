//  <TYPESCRIPT ROUND UP TO BUILD REACT/NEXT PROJECTS>

// 1.VARIABLES

let name="play"
let age=34
// cannot not go because we already give age a value which is anumber and we cannot assign a string
// age="jude"
let ageWithDataType:number;
ageWithDataType=34;


let askName:boolean=false;


// combining two or more datatypes

let nameOrNumber:string|number;

nameOrNumber=34;
nameOrNumber="Gita";




//  ARRAYS IN  TYPESCRIPT

let namesOfCity=["Bamenda", "Douala", "Kumbo"];
// this is automaticaly having a datatype of string but, how do team members know?
// Only types in typescript can solve this problem

let countryWithTRypes:string[];
countryWithTRypes=["America", "France", "Poland"];

countryWithTRypes.push("Brazil");
// will be an error since it is of type string so we can push a number in there, to solve this
// countryWithTRypes.push(34)

let counteyWithTypes2:(string|number)[];

counteyWithTypes2=["luana", "Cameroon", "Ghana"]

counteyWithTypes2.push("jdk")



// OBJECT

let namesOfStudents :{
   studentOne:string,
   matricule:number,
   isMarried:boolean
//    dancer is optional
   dancer?:boolean
}

namesOfStudents={
    studentOne:"Peter",
    matricule:3455,
    isMarried:false,
    // not required
    dancer:true

}


// const takeInStudent: namesOfAnimals={student:"jude", matricule:34, isMarried:"joy"}
// namesOfStudents.stud2=3437


// TYPES

//  ANY TYPE
// if you don't provide a value for variable, it type will be any

let MyNAme;
// it can be anything
// MyNAme=34;
// MyNAme="jgijg";
// MyNAme=false;
// MyNAme=[]

//  SO BE CAREFUL WHEN USING ANY TYPE

// let testAnyArray:any[]


// FUNCTIONS
const sayHi=()=>{
    console.log("Hello, World");
    // this function returns a void, is not returning anything like number, string, or  boolean
}

// this function is going to return a number and here is the syntax below
let multiply=(numb1:number, numb2:number):number=>{
    return (numb1+numb2)*2;
}

// for void we have

let multiplyavoid=(num3):void=>{
    // cannot go because we are not suppose to return anything
    // return num3*4;&
    // do something apart from returning
    console.log("welcome");
}

let sum =(num1:number, num2:number, another?:number):number=>{
    return num1+num2;
}

sum(12,45)

let func=(user:{username:string, age:number, phone?:string})=>{
    console.log(user.username);
    console.log(user.age);
    console.log(user.phone);
}
//  LET SEE HOW WE CAN MODIFY THE FUNCTION ABOVE USING TYPE ALIASES

//  TYPE ALIASES

type userType={
    username:string,
    age:number,
    phone?:number
}

let newUser:userType={
    username:"paul",
    age:12,

}

let betterFunction=(user:userType)=>{
    console.log(user.username);
}


let evenBetterFunction=(user:userType)=>{
    console.log(user.username);
}


//  CREATING A FUNCTION SIGNATURE, ONE WE CAN USE TO CREATE OTHER FUNCTIONS


type myFuncSignature=(score:number, name:string)=>void
// it means that this function will only return void at the end of the day with params matricul and name anything apart from that wil be an error

// how to use this function

let write:myFuncSignature=(num, str)=>{
    console.log(`${num} + ${str}`);
}


type userType2={
    username:string,
    age:number,
    phone?:string,
    theme:"dark"| "white"
}


const userWithTheme:userType2={
    username:"luana",
    age:12,
    theme:"dark"
}





//  INTERFACES *(EXTENSION OF TYPES USUALLY WHEN YOU WANT TO CREATE OR EXTEND A TYPE)
interface Iuser{
    username:string,
    email:string,
    password:string,
    age:number,
    phone?:string

}

// let say some of this users are clients and some of them are employees, how can we create their own interfaces, we simply extend the user interface since all employees and clients are users

interface IEmployee extends Iuser{
    salary:number,
    employeeId:number

}

const emp: IEmployee = {
    username:"fongua",
    email:"employee@gmail.com",
    password:"343fmlvc",
    age:23,
    salary:23000,
    employeeId:34
}

const client:Iuser={
    username:"Angela",
    email:"Angela@gmail.com",
    password:"welcome",
    age:34


}

//  GENERICS  IN TYPESCRIPT
interface IAuthor{
    id:number,
    username:string
}
interface ICategory{
    id:number,
    title:string
}


interface Ipost{
    id:number,
    title:string,
    desc:string,
    // we can make use of generics as shown in the extra below
    extra:
}



type namesOfAnimals={

}



export {}
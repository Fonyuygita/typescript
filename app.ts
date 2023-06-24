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





type namesOfAnimals={

}



export {}
"use strict";
// let us discuss about type and functions in typescript
exports.__esModule = true;
// consider the function below
function addTwo(num) {
    return 6 + num;
}
// the problem with the function is that we dont know the real type of num and num can still bve call with any type (string, number, or boolean) which is still works totally fine
// to specify the type we want, we just put :Data-TYpe(number:string or number or boolean)
// function addTwo(num:number)
// addTwo("23"); is wrong when type is number
// addTwo(23) is correct  when type is a number
addTwo(33);
//  EXAMPLE (2) : consider a simple function to transform a function to upper case
function toUpperCase(val) {
    // value is of type any which is still, wrong: SO IN THE CASE OF FUNCTION, TYPE ANOTATION IS COMPULSORY so we need to specify type say string
    return val.toUpperCase();
}
console.log(toUpperCase("hello welcome to typescript, full course"));
//  EXAMPLE 3 : consider the signup 
function signUp(name, email, isPaid) {
    // putting our function in this format functio signUp():number, will mean that it is returning a number which generate error, so we put string
    // return `your name is ${name} your email is ${email} `;
    return "hello, testing";
}
console.log(signUp("jude fonyuy", "jude@gmail.com", true));

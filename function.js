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
// function signUp(name: string, email:string, isPaid: boolean){
//     // putting our function in this format functio signUp():number, will mean that it is returning a number which generate error, so we put string
//     // return `your name is ${name} your email is ${email} `;
//     // return "hello, testing"
// }
// console.log(signUp("jude fonyuy", "jude@gmail.com", true));
// function getValue(myVal:number):string{
// in this case, it is difficult to specify the return type as string and boolean, so we will see that in subsequent lessons
//     if(myVal>5) return true
//     return "200 OK"
// }
//  TYPES AND ARRAYS 
// const heros=['messi', 'cr7', 'Muller', 'Neymar', 'Mbape'];
// heros.map(hero=>{
//     return `hero is ${hero};`
//     // so if we hover across her, it is automatically giving us type of string so we don't need to specify the return type in this case: YOU CAN RETURN ANYTHING IN THIS CASE
// })
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleHerror(ermsg) {
    throw new Error(ermsg);
}
consoleError("hello jude");
handleHerror("jude fonyuy");

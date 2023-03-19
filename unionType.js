//  UNION TYPE INN TYPESCRIPT
// union is the combination of two or more data types you can use in a var, function or object
// const combineMore:string | number | boolean=435
// here combineMore can be string, number or boolean
var score;
var jude = { name: "jude", id: 1 };
// 'but in future everything can be assign to Admin powers
jude = { username: "george", id: 2 };
// very useful in writing functions
function checkUser(name) {
    if (name === "jude")
        return true;
    return "your name is not  jude, but ".concat(name);
}
console.log(checkUser("paul"));

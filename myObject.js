"use strict";
exports.__esModule = true;
var User = {
    name: "jude",
    email: "fonyuy@gmail.com",
    isActive: true
};
// create a function call create user 
// bad behaviour in javascript
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// call function here
//  EVEN THOUGH THERE IS NO EMAIL PASS AS PARAM IN OUR OBJECT, BUT WE CAN STILL PASS NEWUSER THAT CONTAINS AN EXTRA PARAM EMAIL IN OUR createUser function
var newUser = { name: "fabian", isPaid: false, email: "jufrt@email.com" };
var result = createUser(newUser);
//  how to return an object
function createCourse() {
    return { name: "tailwincss", price: 3455 };
}
console.log(createCourse());
function printCoord(pt) {
    console.log("the coordinate of x value is ".concat(pt.x));
    console.log("the coordinate of x value is ".concat(pt.x));
}
printCoord({ x: 23, y: 34 });
//  HOW TO USE IT
var myUser = {
    _id: "3455",
    name: "fonyuy",
    email: "fonyuy@gmail.com",
    isActive: true
};
var _id = myUser._id, name = myUser.name, email = myUser.email, isActive = myUser.isActive;
console.log(name);
function createAnotherUser(u) {
    console.log("my name is " + u.name);
    console.log("welcome to another one");
}
createAnotherUser({ _id: "4545", name: "storyTime", email: "anotherOne@gmail.com", isActive: true });

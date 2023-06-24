const User={
    name:"jude",
    email:"fonyuy@gmail.com",
    isActive:true
}

// create a function call create user 
// bad behaviour in javascript

function createUser({name:string, isPaid:boolean,}){
}

// call function here

//  EVEN THOUGH THERE IS NO EMAIL PASS AS PARAM IN OUR OBJECT, BUT WE CAN STILL PASS NEWUSER THAT CONTAINS AN EXTRA PARAM EMAIL IN OUR createUser function
let newUser={name:"fabian", isPaid:false, email:"jufrt@email.com"}

let result= createUser(newUser)



//  how to return an object

function createCourse():{name:string,price:number}{
return {name:"tailwincss", price:3455}
}

console.log(createCourse());

// type aliases
// type aliases enables you to customize the name of your datatypes

type Point={
    x:number,
    y:number
}


function printCoord(pt:Point){
console.log(`the coordinate of x value is ${pt.x}` );
console.log(`the coordinate of x value is ${pt.x}` );


}


printCoord({x:23, y:34})

// ***************************************************************************************************************

// keyword : readonly, ?


type User={

    // readonly, means it can't be manipulated
  readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    creditCardDetails?:"welcome"
    // question mark helps our credit card details to be optional

    // address:{phone:string, location:string}
}

//  HOW TO USE IT
let myUser:User={
    _id:"3455",
    name:"fonyuy",
    email:"fonyuy@gmail.com",
    isActive:true,
    // address:{
    //     phone:"35566",
    //     location:"center-bolt"
    }
// }
// myUser._id="df" not possible because it is a read only property
myUser.email="quamy@gmail.com"
//  CODE DESTRUCTURING
// const {_id, name, email, isActive}=myUser;
// const {phone, location}=myUser.address



console.log(name);

function createAnotherUser(u:User){
    console.log("my name is " + u.name);

    console.log("welcome to another one");

}

createAnotherUser({_id:"4545", name:"storyTime", email:"anotherOne@gmail.com", isActive:true})


//  COMBINATION OF TYPES
type cardNumber={
    cardnumber:string
}

type cardDate={
    cardDate:string
}

type cardColor={
cardColor:string
}


// combining the 3 types into one type, say cardDetails

type cardDetails=cardNumber & cardDate & cardColor & {
    cvv:number
};

let details:cardDetails={
    cardnumber:"3454545",
    cardDate:"welcome",
    cardColor:"red",
    cvv:3434
    
}


 export {}
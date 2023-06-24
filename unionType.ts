//  UNION TYPE INN TYPESCRIPT
// union is the combination of two or more data types you can use in a var, function or object

// const combineMore:string | number | boolean=435

// here combineMore can be string, number or boolean
let score:number|string;
// score="f34";
// score=45;

// score can be assign to both  number and string

type User={
    name:string,
    id:number
}

type Admin={
    username:String,
    id:number
}

let jude: User| Admin={name:"jude", id:1}

// 'but in future everything can be assign to Admin powers

jude={username:"george", id:2};


// very useful in writing functions

function checkUser(name:string):string | boolean{
if(name==="jude") return true;
return `your name is not  jude, but ${name}`;

}

console.log(checkUser("paul"));

function getDbId(id:number | string){
    if(typeof id==="string"){
        // we can only c heck for this before using string methods
        id.toLowerCase()
    }

    // id.toString().toLowerCase()
}

export {}
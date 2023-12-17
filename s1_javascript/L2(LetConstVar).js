//? 1.)  var vs let vs const 

// var -> function scope

var a = 5;
console.log(a)

{
    var b = 10;
}
console.log(b)

// Let -> block scope

{
    let c = 20;
    console.log(c);
}
// console.log(c); -> error block scope

// Const -> block scope

{
    const d = 20;
    console.log(d);
}
// console.log(d); -> error block scope

// variable Shadowing
function test(){
    var b = 20;
    let a = 10;
    // let c = 50;
    if(true){
        let a = 20; // -> shadowing
        let b = 30; // -> shadowing of var b using let b
        // var c = 40; // -> shadowing of let c using var c and this is a illegal shadowing
        console.log(a);
    }
    console.log(a);
}
test();

// ? 2.) Declatrion vs Initialization vs Assignment
// Var
// 1.) Can redeclare and reassign
// 2.) Declartion without initialization is goof

// Let
// 1.) Can not redeclare but can reassign

// Const
// 1.) Can not redeclare and reassign

// ? 3.) Hoisting
console.log(a);
var a = 10;

console.log(b);
let b = 20;  // -> Error due to temporal death zone

// Temporay Dead Zone -> TDZ is the time between the variable declartiona and initialization

function f(){
    console.log(a , b , c);
    var a = 10;
    let b = 20;
    const c = 30;
    // A will be undefined and b and c will give an error because b and c are in temporal dead zone
}
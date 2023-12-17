// We can pass function in a function
// can return function from a function
// can store function in a variable

// Function is known as first class citizen in javascript

//1.) ------------------- Function Statement --------------------------
// Function defination
function sayHello(params){
    console.log("Function Statement params ", params);
}
// Function call
sayHello(10);
sayHello([10,20,30]);
sayHello({name:"Dev"});
sayHello();

// Important Note ->
// 1.) If we do not send parameter but it defined in function then what will print ?
// -> undefined

// 2.) If we do not return then what will printed ?
// -> undefined
var val = sayHello(10);
console.log(val);

//  we Can return differnet things from a function

// Why functions are first class citizens
// -> Functions are treated as a variable 
// Example ->
let a = [1,2,3,4,5];
let b = a;
console.log(b);


// 2.) ------------------- Function Expression --------------------------
// We can do same thing with functions as well 
// We can put function in a varible as well then it is known as function expression
let fnContainer = function solve(){
    console.log("Function Express");
}

fnContainer();
solve();

// Anonymus Function -> If name does not given to function then it is known as anonymus function
let fnContainer1 = function(){
    console.log("Function Express");
}

// Anonymus Function
let fnContainer2 = function(){
    console.log("Function Express");
} 

// Immediatly invoked function expression(IIFE)

// When let and const were not there then there was hugh problem (Polution , clouser , Jquery)
(function fn(){
    console.log("IIFE")
})();
// Immediatly invoked function expression
// It will called automatically (do while loop)
// 1.) Clouser 
// 2.) Polution
// 3.) Jquery

// Arrow Function -> To small syntax
// Helps in this  and used in react , this is not binded in arrow function
let Ar1 = (num)=>{
    console.log("Arrow function" , num)
    return num*num;
}
let Ar2 = (num)=>  num*num;

// First class citizen 
// 1.) Function can be treated by as a varible
// 2.) assigment ->function expression
// 3.) Variable can be passed as paramenter
// 4.) Function can be passed as parameter
// 5.) Callbacks Higher order function -> map , filter 
// 6.) Higher order function -> map , filter 
// 7.) We can return variable from a function 
// 8.) We can return function from a function -> Closuer

// Param will get address
function funcArg(param){
    console.log("Function Argument" , param);
    param();
    return "We can pass function as argument"
}
function arg(){
    console.log("Argument function");
}
var res = funcArg(arg);

function returnFunction(){
    console.log("I am outer function");
    return function innerReturnFunction(){
        console.log("Inner Return Function")
    }
}
// function returnFunction(){
//     console.log("I am outer function");
//     // Anonymus
//     return function (){
//         console.log("Inner Return Function")
//     }
// }
console.log(returnFunction());

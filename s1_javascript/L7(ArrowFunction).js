// function chai(){
//     console.log(this);
// }
// chai();

//  function statement
// const chai = function(){
//     let username = "dev";
//     console.log(this.username);
// }

// Arrow function
const chai = () => {
    console.log(this); 
}
chai();
// output of chai function is empty object

// Explicit return 
// const addTwo = (a, b) => {
//     return a + b;
// }
// Implecit return
// const addTwo = (a, b) => a + b;

// const addTwo = (a, b) => (a + b);

console.log(addTwo(10, 20));

// for object 
const addTwo = (a, b) => ({a: a, b: b});
// Have to add paranthesis for object











// Arrow functions 
// 1.) Arguments object is not avaliable 
// function f(a ,b){
//     console.log(arguments);
// }
// f(10 , 20);

const f1 = ()=>{
    console.log(arguments);
}

// 2.) Arrow functions do not have their own this. It can access other object this or parent function this

var obj = {
    name: "dev",
    sayHello : function f(){
         let f1 = () =>{
            console.log(this.name);
        }
        console.log(this.name);
    },
    sayHello1 : f = () =>{
        console.log(this.name);
    }
} 

obj.sayHello();
// 3.) 

let name = (num) => num*num;
function f(num){
    num;
}
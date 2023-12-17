// Var is a keyword which is used to declare a variable

// **************** var initialization , Declartion  ****************

console.log(varname); -> // undefined
var varname; 
varname = 10; -> // assign
console.log(varname); -> // 10
varname = 20; -> // reassign
console.log(varname); -> // 20
var varname; ->// redeclared
console.log(varname); -> // 20
varname = 30; -> // reassign after redeclared
console.log(varname); -> // 30

// If we declare same variable name then it will not redeclared and if we change the value then value will be changed

// var is a block scope variable if we define a variable in a block then it will not accessable outside the block

// ************** var scope ******************** 
var a = 10;
console.log(a);
function fn(){
    console.log(a);
    var a = 10;
    console.log(a);
    if(a){
        var a = 20;
        console.log(a);
    }
    console.log(a);
}
console.log(a);
fn();
console.log(a);

output
10
// Entered in fn
undefined   // because of hoisting
10
20
20
// out of fn
10  
10

// In one function value and variable will be same and do not redeclared 



function f(){
    var b = 20;
    console.log(b);
}
f();
// console.log(b) -> // error
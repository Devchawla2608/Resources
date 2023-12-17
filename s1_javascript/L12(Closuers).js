// We will talk about function scope and that lexical scope then 

// Functional Scope 

// function calculate(a , b){
//     let result = a + b;
//     return result;
// }
// console.log(calculate(1 , 2));
// console.log(result); 
//This will give error because result is not defined in global scope

// Lexical Scope

function add(){
    let a = 4;
    function addChild(){
        console.log(a+5);
    }
    addChild();
}

// Lexical Scope is also known as static scope
// what is lexical scope -> child function can access the variable of parent function but parent function can not access the variable of child function it is known as lexical scope

// Lexical scope is also known as static scope because it is fixed at compile time

// clousers

function add(){
    let a = 4;

    function addChild(){
        console.log(a+5);
    }
    return addChild;
}

let child = add();
child();

// We returned from parent but still the child function have access of parent function variable this is known as clousers 
// A function will have bundeled with lexical scope it does not depends that we returned from parent function or not
// Crome uses V8 engine
// nodejs uses V8 engine
// mozilla uses spider monkey engine
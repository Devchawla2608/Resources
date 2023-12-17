// Asynchonous and synchronous javascript
// What is synchronous javascript ?
// Synchronous javascript is the normal javascript which we have been using till now and it is executed line by line and it is blocking in nature which means that if a function is taking time to execute then it will block the execution of the next line till the time it is executed and then it will move to the next line of code.

// What is asynchronous javascript ?
// Asynchronous javascript is the javascript which is executed in the background and it does not block the execution of the next line of code. It is non blocking in nature. It is used to handle the time taking tasks like fetching data from the server or reading a file from the hard disk etc.

// What is callback ?
// Callback is a function which is passed as an argument to another function and it is executed after the execution of the function to which it is passed as an argument.

// What is callback hell ?
// Callback hell is a situation where we have to use multiple callbacks one after the other and it becomes very difficult to understand the code and it becomes very difficult to debug the code.


// var obj = {
//     name: "Asynchonous",
//     age: 20,
//     greet: function(){
//         console.log(this);
//     }
// }

// // Synchronous

// console.log("I");
// console.log("Like");
// console.log("To Eat");
// console.log("Icream");

// // Asynchronous
// console.log("I");
// setTimeout(() => {
//     console.log("Like");
// }, 2000);
// console.log("To Eat");
// console.log("Icream");

// // callbacks -> one function pass as a parameter to another function and that function call that function
// // It makes connection betwen two functions


// function one(){
//     console.log("I");
// }

// function two(){
//     console.log("II");
// }

// one();
// two();

// //? Ans -> It will run in a sequence

// // Make connection between two functions

// function one(call_two){
//     console.log("Step 1 completed. please calll step 2");
//     call_two();
// }

// function two(){
//     console.log("step2");
// }
 
// one(two);

// New Example 1

let  stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"], 
    holder: ["cone", "cup", "stick"],
    liquid: ["water", "ice"],
    toppings: ["chocolate", "peanuts"]
}

let order = (f_n , Call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[f_n]} was selected`);
        Call_production();
    },2000);
    // Call_production(); This will call production before the order so we have to use callback function
    // in setTimeout function
}

let production = () => {
    setTimeout(() => {
        console.log("production has started");

        setTimeout(() => { 
            console.log("The fruit has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() => {
                    console.log("The machine was started");
                    setTimeout(() => {
                        console.log(`icecream was placed on ${stocks.holder[0]}`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);
                            setTimeout(() => {
                                console.log("serve icecream");
                            },1000);
                        },1000);
                    },2000);
                }
                ,1000);
            },1000);
        },2000);
},0o0);
};


order(0 ,production);

// This is the example of callback hell




// Synchornu
console.log("I");
console.log("have");
console.log("Pen");

// Asynchonous
console.log("I");
setTimeout(()=>{
    console.log("Have");
},2000);
console.log("Pen");

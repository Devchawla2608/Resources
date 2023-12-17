// Polyflills -> es6 introduced higher order functions but some of the browsers does not support es6 so we use polyfills to support es6 in all browsers

// What are polyfills ?
// Polyfills are the code which adds a feature which the engine may lack

// Array.prototype which used this keyword a lot

// What is map function 
// Map function is used to iterate over an array and return a new array

// let myArr = [1, 2, 3, 4, 5];

// // let newArr = myArr.map(function (x) {
// //   return x * x;
// // });

// function myPolyFillMap(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(callback(arr[i]));
//   }
//   return newArr;
// }

// function square(num) {
//   return num * num;
// }

// myPolyFillMap(myArr, square);

// let myArr = [1, 2, 3, 4, 5];

// function myPolyFillFilter(arr , cb){
//     let newArr = [];
//     for(let i = 0; i<arr.size() ; i++){
//         if(cb(arr[i]) == true){
//             newArr.push(arr[i]);
//         }   
//     }
// }

// function f(num){
//     return num%2 == 0;
// }

// myPolyFillFilter(myArr , f);

let myArr = [1, 2, 3, 4, 5];

function myPolyFillReducer(arr){
    let sum = 0;
    for(let i = 0; i<arr.size() ; i++){
        sum += i;
    }
    return sum;
}

myPolyFillFilter(myArr);



let arr = [1,2,3,4,5];
function f(arr , callback){
    let newArr = [];
    for(let i = 0 ;i<arr.lenght() ; i++){
        newArr.push_back(callback(arr[i]));
    }
    return newArr;
}

function square(element){
    return element*element;
}

var newArr = f(arr , square);
console.log(newArr);
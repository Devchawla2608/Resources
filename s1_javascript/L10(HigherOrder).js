// What are higherorder functions  ?
// These are array based functions which take functions as arguments or return functions as output

// Higher order functions are functions which take functions as arguments or return functions as output

// map , filter , reduce
// let myArr = [1 , 2 , 3 , 4 , 5];
// let newArr = myArr.map(function(x){
//     return x*x;
// })
// console.log(myArr);
// console.log(newArr);

// filter

// let myArr = [1, 2, 3, 4, 5];

// let filteredArr = myArr.filter(function (x) {
//   return x % 2 == 0;
// });
// console.log(filteredArr);

//Reduce
let myArr = [1, 2, 3, 4, 5];
letsumArr = myArr.reduce(function (accumulator, x) {
  return accumulator + x;
}, 0);
console.log(sumArr);


// Map;
let arr = [1,2,3,4,5];
let newArr = arr.map(function(element){
  return element*element;
})

let newArr1 = arr.filter(function(e){
  return e%2 == 0;
})

let newArr2 = arr.reduce(function(sum , e){
  return sum = sum + e;
} , 0)


let arr = [1, 2, 3, 4];

let copyArr = arr;
copyArr[1] = 100;
console.log(arr);
console.log(copyArr);
// Now both will change  because we are not creating a new array we are just copying the reference of the array

//!Shallow copy and deep copy

// What is spread operator
// Spread operator is used to create a new array

// spread operator is used to create a new array
// let sports = ["cricket", "football", "hockey"];
// let newSports = [...sports];
// newSports[1] = "baseball";
// console.log(sports);
// console.log(newSports);

//When nested array/object is there
// let sports = ["cricket", "football", "hockey", { name: "Rahul", age: 20 }];
// let newSports = [...sports];
// newSports[3]["name"] = "baby";
// console.log(sports);
// console.log(newSports);

// This will not work  because we are doing shallow copy and not deep copy and
// what is shallow copy  and deep copy
// Shallow copy means we are copying the reference of the array. Shallow copy works only for one level . If we have nested array or object then it will not work
// Like the above example we are changing the name of the object but it is also changing in the original array because we are doing shallow copy

// Deep copy means we are creating a new array and copying the values of the array

//! New method for shallow copy

//todo Array.from()
// let sports = ["cricket", "football", "hockey", { name: "Rahul", age: 20 }];
// let newSports = Array.from(sports);
// newSports[3]["name"] = "baby";
// console.log(sports);
// console.log(newSports);

//todo slice

// let sports = ["cricket", "football", "hockey", { name: "Rahul", age: 20 }];
// let newSports = sports.slice();
// newSports[3]["name"] = "baby";
// console.log(sports);
// console.log(newSports);

//! Deep Copy

let sports = ["cricket", "football", "hockey", { name: "Rahul", age: 20 }];
let newSports = JSON.parse(JSON.stringify(sports));
newSports[3]["name"] = "baby";
console.log(sports);
console.log(newSports);

// In the case of objects we can use assign keyword as well

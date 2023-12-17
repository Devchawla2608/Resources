let myArr = ["Fan", "Camera", 34, null, true];

// Array Methods
// 1.) Lenght 
console.log(myArr.length);

// 2.) pop
myArr.pop();

// 3.) push
myArr.push("Steve");

// 4.) shift -> Removes the first element from the array
myArr.shift(); 

// 5.) unshift -> Adds the first element in the array
myArr.unshift("Harry");
// console.log(myArr.unshift("Harry")); -> Returns the length of the array

// 6.) includes -> Checks if the element is present in the array
console.log(myArr.includes("Harry"));

// 7.) indexOf -> Returns the index of the element
console.log(myArr.indexOf("Harry"));

// 8.) isArray -> Checks if the variable is an array or not
console.log(Array.isArray(myArr));

// 9.) splice -> Removes the element from the array
myArr.splice(1, 2); //-> Removes 2 elements from the index 1

// 10.) Filter -> Returns a new array based on the condition
let myNewArr = myArr.filter(function (num) {
    return num != 34;
    }
);

// 11.) Map -> Returns a new array based on the condition
let myNewArr1 = myArr.map(function (num) {
    return num;
    }
);

// 12.) Sort -> Sorts the array
myArr.sort();

// 13.) Reverse -> Reverses the array
myArr.reverse();

// 14.) join -> Joins the array elements
let myNewStr = myArr.join(" ");
console.log(myNewStr);

// 15.) Some()-> Checks if any of the element satisfies the condition
let myArr2 = [2, 3, 4, 5, 6, 7];
let myNewArr2 = myArr2.some(function (num) {
    return num % 2 == 0;
    }
);
console.log(myNewArr2);

// 16.) Every()-> Checks if all of the element satisfies the condition
let myArr3 = [2, 4, 6, 8, 10];
let myNewArr3 = myArr3.every(function (num) {
    return num % 2 == 0;
    }
);

// 17.) Reduce()-> Reduces the array to a single value
let myArr4 = [2, 4, 6, 8, 10];
let myNewArr4 = myArr4.reduce(function (acc, num) {
    return acc + num;
    }
);

// 18.) Sort decending order-> Sorts the array in decending order
let myArr5 = [2, 4, 6, 8, 10];
myArr5.sort((a,b) => a>b? -1:1);

// 19.) Array.from -> Converts a string to an array
let myStr = "Harry";
let myNewArr5 = Array.from(myStr);
console.log(myNewArr5);

// 20.) Array.of -> Converts a string to an array
let myNewArr6 = Array.of(1, 2, 3, 4, 5);
console.log(myNewArr6);

// 21.) join -> Joins the array elements and returns a string
const num1 = ['sa' , 'lo' , 'n' , 'i'];
console.log(num1.join(''));

//22.)  toString -> Converts the array to a string
const num2 = ['sa' , 'lo' , 'n' , 'i'];
console.log(num2.toString());

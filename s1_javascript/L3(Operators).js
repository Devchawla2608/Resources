// Operators 
// 1. Arithmetic Operators
var a = 10;
var b = 20;

console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
c += 2;
c -= 2; // c = c - 2
c *= 2;
c /= 2;
console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
console.log(x == y); // ->  loose equality
console.log(x === y); // ->  strict equality
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

console.log('1' == '2') //->wrong
console.log('1' == 1) // -> right

console.log('1' === '2') //->wrong
console.log('1' === 1) // -> wrong

// Logical Operators (Boolean Values)
// Logical and
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// Logical or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical not
console.log(!false);
console.log(!true);

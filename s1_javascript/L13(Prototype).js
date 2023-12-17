// Some broswers does not support inbuilt higher order functions like map, filter, reduce etc. So we use prototype to support these functions in all browsers./

Array.prototype.showName = function(){
    console.log(this);
}

let myArr = [1, 2, 3, 4, 5];
myArr.showName();

// This will give the array because we are using this keyword and this keyword will refer to the array

// Now we can implement map, filter, reduce using prototype because this is pointing to the array 

Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};

function square(num) {
    return num * num;
    }

myArr.myMap(square);


Array.prototype.showName() = function{
  console.log(this);
}

let arr = [1 , 2 , 3  , 4 ,5];
console.log(arr.showName);
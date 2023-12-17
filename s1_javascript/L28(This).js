// > node This.js

// constructor function

//Prototypal inheritance

// > node This.js

// constructor function

//Prototypal inheritance


// This keyword

// !browser  |   Non strict mode     Strict mode
         //  |
// //!Nodejs

//strict mode ??
// In strict mode, you can not, for example, use undeclared variables.

// non strict  mode ??
// In non strict mode, you can use undeclared variables.

// a = 3;
// console.log(a);

// This will run

// In strict mode this will give error
// ("use strict");
// let a = 3;
// console.log(a);

//? >>>>>>>>>  this keyword in nodejs with non strict mode  ??

1.) Globally console.log(this)
console.log(this);
// this will give empty object

2.) In Function console.log(this)
function showThis() {
  console.log(this);
}

showThis();
// this will give global object

3.) In object in function console.log(this)
let obj = {
  name: "Dev",
  f: function () {
    console.log(this);
  },
};
obj.f();
// this will give object because this is pointing to the object

4.) In object in function in function console.log(this)
let obj = {
  name: "Dev",
  f: function () {
    function g() {
      console.log(this);
    }
    g();
  }
  // this will give global object because this is pointing to the global object
};


5.)  function in function console.log(this)
function
  f() {
    function g() {
      console.log(this);
    }
    g();

  }
  f();
// this will give global object because this is pointing to the global object


//? >>>>>>>>>  this keyword in nodejs with strict mode  ??

"use strict";

1.) Globally console.log(this)
console.log(this)
// this will give empty object

2.) In Function console.log(this)
function showThis() {
  console.log(this);
}

showThis();
// this will give undefined
// React uses strict mode 

3.) In object in function console.log(this)
let obj = {
  name: "Dev",
  f: function () {
    console.log(this);
  },
};
obj.f();
// this will give object because this is pointing to the object

4.) In object in function in function console.log(this)
let obj = {
  name: "Dev",
  f: function () {
    function g() {
      console.log(this);
    }
    g();
  }
  // this will give undefined because this is pointing to the undefined

  // Means in strict mode not one will point to global object


5.) function in function console.log(this)
function

  f() {
    function g() {
      console.log(this);
    }
    g();

  }
  f();
// this will give undefined because this is pointing to the undefined

//? >>>>>>>>>  this keyword in Browser with non strict mode  ??

1.) Globally console.log(this)
console.log(this)
// this will give window object

2.) In Function console.log(this)
function showThis() {
  console.log(this);
}

showThis();
// this will give window object

3.) In object in function console.log(this)
let obj = {
  name: "Dev",
  f: function () {
    console.log(this);
  },
};
obj.f();
// this will give object because this is pointing to the object


4.) In object in function in function console.log(this)
let obj = {
  name: "Dev",
  f: function () {
    function g() {
      console.log(this);
    }
    g();
  }
  // this will give window object because this is pointing to the window object


5.) function in function console.log(this)
function
  f() {
    function g() {
      console.log(this);
    }
    g();
  }
  f();
// this will give window object because this is pointing to the window object

//? >>>>>>>>>  this keyword in Browser with strict mode  ??

1.) Globally console.log(this)
console.log(this)
// this will give window object

2.) In Function console.log(this)
function showThis() {
  console.log(this);
}
showThis();
// this will give undefined


3.) In object in function console.log(this)
let obj = {
  name: "Dev",
  f: function () {
    console.log(this);
  },
};
obj.f();
// this will give object because this is pointing to the object


4.) In object in function in function console.log(this)
let obj = {
  name: "Dev",
  f: function () {
    function g() {
      console.log(this);
    }
    g();
  }
  // this will give undefined because this is pointing to the undefined


5.) function in function console.log(this)
function  
  f() {
    function g() {
      console.log(this);
    }
    g();
  }
  f();
// this will give undefined because this is pointing to the undefined




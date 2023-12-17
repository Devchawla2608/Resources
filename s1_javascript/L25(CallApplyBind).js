// How functions can be called for different objects using call, apply and bind methods

let person1 = {
    firstName: "John",
    age : 10,
    showDetails : function(){
        console.log(this.firstName + " " + this.age);
    }
}

let person2 = {
    firstName: "Jane",
    age : 20

}
//  Now if i want to call same function for person2 then i can use call method but i do not want to create for every person object so i can use call method


//  Function borrowing
// person1.showDetails.call(person2);

// We can define this showDetails function globally 

function showDetails(){
    console.log(this.firstName + " " + this.age);
}

showDetails.call(person2);

// External Agrument

function showDetails(city , state){
    console.log(this.firstName + " " + this.age + " " + city + " " + state);
}

showDetails.call(person2 , "Rohini" , "Delhi");

// Apply method
// When we use apply then we have to pass external arguments in array

showDetails.apply(person2 , ["Rohini" , "Delhi"]);

// Bind method

let showDetailsBind = showDetails.bind(person2 , ["Rohini" , "Delhi"]);

showDetailsBind();

// Bind will create a new function and return it and we can call it later

f : function(){
    console.log("hello");
}

var obj = {
    name : "Ram",

}

var o = {
    name : "Sh",
}
f.call(o , 1 , 2 , 3);
f.apply(o , [1,2,3]);
var name = f.bind(o , [1,2,3]);
f.name();


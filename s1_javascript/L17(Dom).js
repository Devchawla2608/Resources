// What is dom ?   
// ' Document Object Model which is a tree like structure which is created by browser used to represent html document and it is a api which is used to manipulate the html document and have a collection of methods and properties which is used to manipulate the html document

// We can access the dom by using document object
// console.log(document);

// We can change the content of the html document by using document object

// document.title = "Changed";

// We can fetch the elements by using there id and class name

let element = document.getElementById('click');
console.log(element);

// We can change the content of the html document by using document object

let elementClass = document.getElementsByClassName('container');
console.log(elementClass);
elementClass[0].style.background = "yellow";
// We are using indes because we fetch elements by class name and it returns a array of elements

// Can add new class to the element
elementClass[0].classList.add("bg-primary");

// Can remove class from the element
elementClass[0].classList.remove("bg-primary");

// Can create new Element
let newElement = document.createElement('p');
newElement.innerText = "This is a new element";
elementClass[0].appendChild(newElement);

// Can Replace Element
let newElement2 = document.createElement('b');
newElement2.innerText = "This is a new element";
elementClass[0].replaceChild(newElement2, newElement);

// Can remove Element
elementClass[0].removeChild(newElement2);

// Some properties of document object
//1.) document.url 
//2.) document.title
//3.) document.locations
//4.) document.domain

// Select Element by using query selector
let sel = document.querySelector('.container');
console.log(sel);

// Select Element by using query selector all
let selAll = document.querySelectorAll('.container');
console.log(selAll);



let e = document.getElementById('a');

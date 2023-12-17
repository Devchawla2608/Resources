//     Note -> 
// Every code in javascript runs in execution context
// No main in javasccript
// Wrapper in which javascript provides us functionality

// 1.) Two things in execution context
//     1.) Global Object All are different in nodejs and browser
//     2.) this keyword


    
//     ____________________________
//     |                           |
//     |    Global Object          |             
//     |                           |  
//     |      This keyword         |
//     |___________________________|

//     Execution context

// Console.log(global)

// In browser
// console.log(window)


// In nodejs this will be empty object
// In browser this will be window object


// Code which is not inside any function is known as global code and present in global area
// Wrapper -> global execution context

// Global Execution Context 
//     1.) Global Object -> global
//     2.) this keyword -> empty object
//     3.) code area -> 
//         1.) variable -> Hoisting 

        // Memory allocated before writing the code is known as hoisting and the value is undefined 

//         Example 
        // console.log(a); -> Undefined
        // var a = 10;
        // console.log(a);


        // Functions 
        // Function  -> memory allocated before writing the code and the refernce will be stored in stack no undefined 
        // -> give output hello 
        fn() 
        function fn(){
            console.log("Hello");
        }

        // fn(); -> give hello 

        // Example 

//         function fn(){
//             console.log("Hello 1");
//         }

//         function fn(){
//             console.log("Hello 2");
//         }

//         function fn(){
//             console.log("Hello 3");
//         }

        // fn(); -> Hello 3

//         explanation -> 
        // Function  -> memory allocated before writing the code and the refernce will be stored latest so it will give output hello 3 .It does not depend where it is called it will give output hello 3





const sum = require('./Sum.js')


// ! Method 1

// test('properly adds two numbers' , ()=>{
//     if(sum(1,2) === 3){

//     }else{

//     }
// })

// ! Method 2

test('properly adds two numbers' , ()=>{
    expect(
        sum(1,2)
        ).toBe(3)
})
// There alot of functions like toBe , toEquall , notToEquall , ToBeUndefined
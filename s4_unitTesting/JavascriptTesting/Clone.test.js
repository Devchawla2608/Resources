const cloneArray = require('./Clone.js')
test('Properly Clone Array' , () =>{
    const array = [1,2,3]
    // expect(cloneArray(array)).toBe(array)
    expect(cloneArray(array)).not.toBe(array) 
    expect(cloneArray(array)).toEqual(array)
})

// In this we have to use toEquall becuase we want to check whether it has same address or not
const subtract  = require('./Subtract.js')

test('Properly Subtact Two Numbers' , ()=>{
    expect(
        subtract(1,2)
    ).toBe(-1)
})
// // import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

// test('add 14+9 to equal 23', () => { //Result of npm run test succesful
//     let total = sum(14,9)
//     expect(total).toBe(23)
// })

// test("One euro should be 1.206 dollars", function(){
//     //import the function from app.js
//     const { fromEuroToDollar } = require('./app.js')

//     // use the function like its suppoed to be used
//     const dollars = fromEuroToDollar(3.5)

//     // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
//     const expected = 3.5 * 1.2; 
    
//     // this is the comparison for the unit test
//     expect(expected).toBe(dollars);
// })
test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require(`./app.js`)
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(expected).toBe(dollars);
})



test("127.9 yens should be 0.8 pounds", function(){
    const { fromYanToPound } = require(`./app.js`)
    const yenes = fromYanToPound(127.9);   
   
   const expected2 = 0.8;
    expect(expected2).toBe(yenes);
}) 


test("50 yens should be 0.312744 pounds", function(){
    const { fromYanToPound } = require(`./app.js`)
    const yenes = fromYanToPound(50);
    const expected = (50 * 0.8)/127.9;t =5329.16666

    expect(expected).toBe(yenes); 
})


test("1.2 dolars should be 127.9 yenes", function(){
    const { fromDollarToYen } = require(`./app.js`)
    const yenes = fromDollarToYen(1.2)
    
    const expected = (1.2 * 127.9)/1.2;
    expect(expected).toBe(yenes);
})

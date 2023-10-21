const { fromDollarToYen,fromEuroToDollar,fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 156.5/1.07 yens", () =>{
    const calculated = 5*156.5/1.07;

    expect(fromDollarToYen(5)).toBe(calculated);
})
test("One yen equals 0.87/156.5 pounds", () =>{
    const calculated = 5*0.87/156.5

    expect(fromYenToPound(5)).toBe(calculated);
})


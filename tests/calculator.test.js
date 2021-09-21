const calculator =require('./calculator');

test('adds two numbers',()=>{
    expect(calculator.add(1,2)).toBe(3);
});
test('subtracts two numbers',()=>{
    expect(calculator.subtract(2,1)).toBe(1);
});
test('multiplies two numbers',()=>{
    expect(calculator.multiply(1,2)).toBe(2);
});
test('divides two non-zero numbers',()=>{
    expect(calculator.divide(4,2)).toBe(2);
});
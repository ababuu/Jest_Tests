const reverseString=require('./reverseString');

test('reverses string',()=>{
    expect(reverseString('hello')).toBe('olleh');
});
const reverseString=require('../code/reverseString');

test('reverses string',()=>{
    expect(reverseString('hello')).toBe('olleh');
});
const { test, expect } = require("@jest/globals");
const encrypt=require('./caesarCipher');
test('encrypts messages with a key of 2',()=>{
    expect(encrypt(2,'hello')).toBe('jgnnq')
});
test('encrypts messages with a key of 5',()=>{
    expect(encrypt(5,'hello')).toBe('mjqqt')
});
test('keeping the same case',()=>{
    expect(encrypt(5,'HeLLo')).toBe('MjQQt')
})
test('keeps punctuations the same',()=>{
    expect(encrypt(5,'hello!')).toBe('mjqqt!');
})
test.skip('wrapping',()=>{
    expect(encrypt(1,'a')).toBe('z');
});
test.skip('decrypts messages with a key of 2',()=>{
    expect(decrypt(2,'jgnnq')).toBe('hello')
});
test.skip('decrypts messages with a key of 5',()=>{
    expect(decrypt(5,'mjqqt')).toBe('hello')
});
test.skip('keeping the same case',()=>{
    expect(decrypt(5,'MjQQt')).toBe('HeLLo')
})
test.skip('wrapping',()=>{
    expect(decrypt(1,'z')).toBe('a');
});

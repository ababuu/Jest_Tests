const { test, expect } = require("@jest/globals");
const{encrypt,decrypt}=require('./caesarCipher');
test('encrypts messages with a key of 2',()=>{
    expect(encrypt(2,'hello')).toBe('jgnnq')
});
skip.test('encrypts messages with a key of 5',()=>{
    expect(encrypt(5,'hello')).toBe('mjqqt')
});
skip.test('keeping the same case',()=>{
    expect(encrypt(5,'HeLLo')).toBe('MjQQt')
})
skip.test('keeps punctuations the same',()=>{
    expect(encrypt(5,'hello!')).toBe('mjQQt!');
})
skip.test('wrapping',()=>{
    expect(encrypt(1,'a')).toBe('z');
});
skip.test('decrypts messages with a key of 2',()=>{
    expect(decrypt(2,'jgnnq')).toBe('hello')
});
skip.test('decrypts messages with a key of 5',()=>{
    expect(decrypt(5,'mjqqt')).toBe('hello')
});
skip.test('keeping the same case',()=>{
    expect(decrypt(5,'MjQQt')).toBe('HeLLo')
})
skip.test('wrapping',()=>{
    expect(decrypt(1,'z')).toBe('a');
});

const { test, expect } = require("@jest/globals");
import {encrypt,decrypt} from '../code/caesarCipher'
test('encrypts messages with a key of 2',()=>{
    expect(encrypt(2,'hello')).toBe('jgnnq')
});
test('encrypts messages with a key of 5',()=>{
    expect(encrypt(5,'hello')).toBe('mjqqt')
});
test('encryption: keeping the same case',()=>{
    expect(encrypt(5,'HeLLo')).toBe('MjQQt')
})
test('encryption: keeps punctuations the same',()=>{
    expect(encrypt(5,'hello!')).toBe('mjqqt!');
})
test('encryption: works with spaces',()=>{
    expect(encrypt(5,'hello there')).toBe('mjqqt ymjwj');
});
test('encryption: wrapping',()=>{
    expect(encrypt(1,'z')).toBe('a');
});
test('decrypts messages with a key of 2',()=>{
    expect(decrypt(2,'jgnnq')).toBe('hello')
});
test('decrypts messages with a key of 5',()=>{
    expect(decrypt(5,'mjqqt')).toBe('hello')
});
test('decryption: keeping the same case',()=>{
    expect(decrypt(5,'MjQQt')).toBe('HeLLo')
})
test('decryption: keeps punctuations the same',()=>{
    expect(decrypt(5,'mjqqt!')).toBe('hello!');
})
test('decryption: works with spaces',()=>{
    expect(decrypt(5,'mjqqt ymjwj')).toBe('hello there');
});
test('wrapping',()=>{
    expect(decrypt(1,'a')).toBe('z');
});

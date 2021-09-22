const { test, expect } = require("@jest/globals");
import {encrypt,decrypt} from './caesarCipher'
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
test.skip('decrypts messages with a key of 5',()=>{
    expect(decrypt(5,'mjqqt')).toBe('hello')
});
test.skip('decryption: keeping the same case',()=>{
    expect(decrypt(5,'MjQQt')).toBe('HeLLo')
})
test.skip('decryption: keeps punctuations the same',()=>{
    expect(encrypt(5,'mjqqt!')).toBe('hello!');
})
test.skip('decryption: works with spaces',()=>{
    expect(encrypt(5,'hello there')).toBe('mjqqt ymjwj');
});
test.skip('wrapping',()=>{
    expect(decrypt(1,'a')).toBe('z');
});

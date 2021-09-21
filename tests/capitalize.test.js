const { test, expect } = require('@jest/globals');
const capitalize=require('./capitalize');

test('Capitalize the first letter',()=>{
    expect(capitalize('donda')).toBe('Donda');
})
const { test, expect } = require('@jest/globals');
const capitalize=require('../code/capitalize');

test('Capitalize the first letter',()=>{
    expect(capitalize('donda')).toBe('Donda');
})
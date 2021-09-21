import { expect, test } from '@jest/globals';
import {add} from './calculator';

test('adds two numbers',()=>{
    expect(add(1,2)).toBe(3);
})
import { expect, test } from "@jest/globals";

test('analyzes the given array',()=>{
    const object = analyze([1,8,3,4,2,6]);
    object
    expect(object).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})
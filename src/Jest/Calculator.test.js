import {add,sub} from './Calculator';
test('adds two numbers'()=>{
    expect(add(1,2)).toBe(3);
    expect(add(5,5)).toBe(10);
})
test('subtracts two numbers'()=>{
    expect(sub(2,1)).toBe(1);
    expect(sub(5,5)).toBe(0);
})

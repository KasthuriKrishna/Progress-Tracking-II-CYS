import {add,sub} from './Calculator'
test('adds two numbers',()=>{
  expect(add(1,2)).toBe(3);
  expect(add(5,5)).toBe(10);
});
test('subtrcts two numbers',()=>{
  expect(sub(1,2)).toBe(3);
  expect(sub(5,5)).toBe(10);
});

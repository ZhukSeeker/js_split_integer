'use strict';
const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(34, 4)).toEqual([8, 8, 9, 9]);
  expect(splitInteger(26, 6)).toEqual([4, 4, 4, 4, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {

  expect(splitInteger(15, 1)).toEqual([15]);
  expect(splitInteger(28, 1)).toEqual([28]);
  expect(splitInteger(7, 1)).toEqual([7]);
});

test('should sort parts ascending if they are not equal', () => {

  expect(splitInteger(14, 3)).toEqual([4, 5, 5]);
  expect(splitInteger(23, 4)).toEqual([5, 6, 6, 6]);
  expect(splitInteger(32, 5)).toEqual([6, 6, 6, 7, 7]);
});

test('should add zeros if value < numberOfParts', () => {

  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
  expect(splitInteger(5, 10)).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
  expect(splitInteger(6, 8)).toEqual([0, 0, 1, 1, 1, 1, 1, 1]);
});
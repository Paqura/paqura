import {chunk} from '../index';

const testArray = [1, 2, 5, 6, {name: 'test'}];
const expectedOn2Len = [[1, 2], [5, 6], [{name: 'test'}]];
const expectedOn3Len = [[1, 2, 5], [6, {name: 'test'}]];

describe('chunk function', () => {
  it('should return null if first parameter !== True', () => {
    expect(chunk(undefined, 5)).toBe(null);
  });

  it('should return same arr if second params is empty', () => {
    expect(chunk(testArray)).toEqual(testArray);
  });

  it('should return array of arrays splitted on length from second param', () => {
    expect(chunk(testArray, 2)).toEqual(expectedOn2Len);
    expect(chunk(testArray, 3)).toEqual(expectedOn3Len);
  });
});

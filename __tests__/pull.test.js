import {pull} from '../';

const arr = ['a', 'b', 'b', 'w', 'x', 'b'];
let exptectedResult;

describe('pull()', () => {
  it('should return expected result', () => {
    exptectedResult = ['w'];
    expect(pull(arr, 'a', 'b', 'x')).toEqual(exptectedResult);
  });

  it('should return empty array if first argument is not an array', () => {
    expect(pull({})).toEqual([]);
    expect(pull('')).toEqual([]);
    expect(pull(2)).toEqual([]);
  });
});
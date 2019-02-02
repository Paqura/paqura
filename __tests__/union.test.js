import {union} from '../';

describe('Union method test', () => {
  it('should returns the correct flatten array without similar item', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [3, 4, 5];
    const expectResult = [1, 2, 3, 4, 5];

    expect(union(arr1, arr2)).toEqual(expectResult);
  });
});

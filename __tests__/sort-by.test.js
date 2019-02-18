import {sortBy} from '../index';

const sortArray = [{name: 'aba'}, {name: 'baba'}];
const unsortArray = [{name: 'baba'}, {name: 'aba'}];

describe('sortBy function', () => {
  it('should return same array if [key] is empty', () => {
    expect(sortBy(unsortArray)).toEqual(unsortArray);
  });

  it('should return sort array', () => {
    expect(sortBy(unsortArray, 'name')).toEqual(sortArray);
  });
});
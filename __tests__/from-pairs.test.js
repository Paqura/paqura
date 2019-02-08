import {fromPairs} from '../';

const pairs = [['name', 'slava'], ['lastname', 'avals']];
const expectedResult = JSON.stringify({name: 'slava', lastname: 'avals'});

describe('fromPairs()', () => {
  it('should return object key:value', () =>{
    expect(JSON.stringify(fromPairs(pairs))).toEqual(expectedResult);
  });
});
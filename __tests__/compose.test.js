import {compose} from '../index';

const toUpper = str => str.toUpperCase();
const splitText = str => str.split('');

describe('compose', () => {
  it('should return expected result', () => {
    const enhanced = compose(
      splitText,
      toUpper,
    )('hello');

    const expectedResult = ['H', 'E', 'L', 'L', 'O'];

    expect(enhanced).toEqual(expectedResult);
  })
})

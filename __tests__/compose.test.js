import {compose} from '../index';

const toUpper = str => str.toUpperCase();
const splitText = str => str.split('');

describe('compose', () => {
  it('should return expected result', () => {
    const enhanced = compose(
      toUpper,
      splitText,
    )('hello');

    const expectedResult = ['H', 'E', 'L', 'L', 'O'];

    expect(enhanced).toEqual(expectedResult);
  })
})

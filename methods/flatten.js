import {isArray} from '../index';

export const flatten = arr => {
  let result = [];

  function checkTypeOfInput(arr) {
    isArray(arr)
      ? arr.forEach(item => isArray(item) ? checkTypeOfInput(item) : result.push(item))
      : result.push(arr)

    return result;
  }

  return checkTypeOfInput(arr);
}

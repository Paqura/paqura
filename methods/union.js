import {isArray} from '../index';

export const union = (...arrays) => {
  const result = [];

  const innerScope = arrays => {
    isArray(arrays)
      ? arrays.forEach(item => isArray(item)

        ? innerScope(item)
        : !result.includes(item) && result.push(item))

      : result.push(arrays);
    return result;
  }

  return innerScope(arrays);
}
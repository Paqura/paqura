import {isArray} from '../index';

export const pull = (arr, ...keys) => {
  if(!isArray(arr)) {
    return [];
  }

  return arr.filter(item => !keys.includes(item));
}
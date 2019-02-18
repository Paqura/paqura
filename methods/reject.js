import {isArray} from '../index';

// key is an array key:value ['id', '1']

const isReject = (element, key) => {
  return !Boolean(element[key[0]] === key[1]);
}

export const reject = (arr, key) => {
  if(!isArray(arr)) return [];

  return arr.filter(it => isReject(it, key));
}

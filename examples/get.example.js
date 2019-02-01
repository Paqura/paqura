import get from '../methods/get';

const arr = [{name: 'first'}, {name: 'second'}];

get(arr, 'name', null); // ['first', 'second']
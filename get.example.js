import get from './get';

const arr = [{name: 'first'}, {name: 'second'}];

get(arr, 'name', null); // ['first', 'second']
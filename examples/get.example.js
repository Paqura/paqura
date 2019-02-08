import {get} from '../';

const arr = [{name: 'first'}, {name: 'second'}];

get(arr, 'name', null); // ['first', 'second']
import {pull} from '../';

const arr = ['a', 'b', 'b', 'c', 'a', 'd', 'w'];
const res = pull(arr, 'a', 'b'); // ["c", "d", "w"]
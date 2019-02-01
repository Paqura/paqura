import {curry} from '../';

const add = (a, b) => a + b;

const curryAdd = curry(add);
const curryAdd2 = curryAdd(2);
curryAdd2(2) // 4
curryAdd2(3) // 5
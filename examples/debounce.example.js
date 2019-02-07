import {debounce} from '../';

const saySomeThing = str => console.log(str);
const debouncedFn = debounce(saySomeThing, 20);

debouncedFn('Hello world') // 1s, 2s, 'Hello world'
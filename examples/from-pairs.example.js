import {fromPairs} from '../';

const arr = [['name', 'slava'], ['lastname', 'avals']];

const res = fromPairs(arr); // {name: "slava", lastname: "avals"}

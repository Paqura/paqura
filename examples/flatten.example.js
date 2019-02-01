import flatten from '../methods/flatten';

const res = flatten([2, [2, [33, [[[46, '775']]]]]]) // [2, 2, 33, 46, '775']
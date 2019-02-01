var Paqura = (function (exports) {
  'use strict';

  const get = (arrayOfObjects, path, defaultValue) => {
    const resultArray = arrayOfObjects.map(
      item => item[path]
    );

    return resultArray.length ? resultArray : defaultValue;
  };

  const isArray = arrOrNot => Array.isArray(arrOrNot);

  const flatten = arr => {
    let result = [];

    function checkTypeOfInput(arr) {
      isArray(arr)
        ? arr.forEach(item => isArray(item) ? checkTypeOfInput(item) : result.push(item))
        : result.push(arr);

      return result;
    }

    return checkTypeOfInput(arr);
  };

  const curry = fn => {
    const arity = fn.length;

    return function inner (...args) {
      if(arity <= args.length) {
        return fn.apply(null, args);
      }

      return (...moreArgs) => {
        const newArgs = args.concat(moreArgs);
        return inner.apply(null, newArgs);
      }
    }
  };

  const compact = arr => arr.filter(item => Boolean(item));

  const pipe = (value, fn, ...fns) => fn ? pipe(fn(value), ...fns) : value;

  exports.get = get;
  exports.flatten = flatten;
  exports.curry = curry;
  exports.compact = compact;
  exports.pipe = pipe;

  return exports;

}({}));

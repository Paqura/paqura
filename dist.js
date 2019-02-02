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

  const isArray$1 = arrOrNot => Array.isArray(arrOrNot);

  const union = (...arrays) => {
    const result = [];

    const innerScope = arrays => {
      isArray$1(arrays)
        ? arrays.forEach(item => isArray$1(item)

          ? innerScope(item)
          : !result.includes(item) && result.push(item))

        : result.push(arrays);
      return result;
    };

    return innerScope(arrays);
  };

  exports.get = get;
  exports.flatten = flatten;
  exports.curry = curry;
  exports.compact = compact;
  exports.pipe = pipe;
  exports.union = union;

  return exports;

}({}));

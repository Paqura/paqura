var Paqura = (function (exports) {
  'use strict';

  var get = (arrayOfObjects, path, defaultValue) => {
    const resultArray = arrayOfObjects.map(
      item => item[path]
    );

    return resultArray.length ? resultArray : defaultValue;
  };

  const isArray = arrOrNot => Array.isArray(arrOrNot);

  var flatten = arr => {
    let result = [];

    function checkTypeOfInput(arr) {
      isArray(arr)
        ? arr.forEach(item => isArray(item) ? checkTypeOfInput(item) : result.push(item))
        : result.push(arr);

      return result;
    }

    return checkTypeOfInput(arr);
  };

  var curry = fn => {
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

  exports.get = get;
  exports.flatten = flatten;
  exports.curry = curry;

  return exports;

}({}));

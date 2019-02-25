var Paqura = (function (exports) {
  'use strict';

  const isArray = arrOrNot => Array.isArray(arrOrNot);

  const get = (arrayOfObjects, path, defaultValue) => {
    const resultArray = arrayOfObjects.map(
      item => item[path]
    );

    return resultArray.length ? resultArray : defaultValue;
  };

  const flatten$$1 = arr => {
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

  const compact = arr => arr.filter(Boolean);

  const pipe = (value, fn, ...fns) => fn ? pipe(fn(value), ...fns) : value;

  const union$$1 = (...arrays) => {
    const result = [];

    const innerScope = arrays => {
      isArray(arrays)
        ? arrays.forEach(item => isArray(item)

          ? innerScope(item)
          : !result.includes(item) && result.push(item))

        : result.push(arrays);
      return result;
    };

    return innerScope(arrays);
  };

  const debounce = (fn, ms) => {
    let timer = null;

    return (...args) => {
      const onComplete = () => {
        timer = null;
        return fn.apply(null, args);
      };

      if(!timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(onComplete, ms);
    };
  };

  const fromPairs = pairs => {
    const res = {};

    pairs.forEach((item, idx) => res[item[0]] = item[1]);
    return res;
  };

  const pull$$1 = (arr, ...keys) => {
    if(!isArray(arr)) {
      return [];
    }

    return arr.filter(item => !keys.includes(item));
  };

  // key is an array key:value ['id', '1']

  const isReject = (element, key) => {
    return !Boolean(element[key[0]] === key[1]);
  };

  const reject$$1 = (arr, key) => {
    if(!isArray(arr)) return [];

    return arr.filter(it => isReject(it, key));
  };

  const sortBy = (arr, key) => {
    if(!key) return arr;

    return arr.sort((previous, next) => previous[key].localeCompare(next[key]));
  };

  const memo = fn => {
    let cache = {};
    let res;

    return (...args) => {
      const key = JSON.stringify(...args);

      if(cache[key]) {
        return cache[key];
      } else {
        res = fn.apply(undefined, args);
        cache[key] = res;
        return res;
      }
    }
  };

  const chunk = (arr, len) => {
    if(!arr) return null;
    if(!len) return arr;

    const result = [];
    const tail = [...arr];

    while(tail.length > len) {
      result.push(tail.splice(0, len));
    }

    return result.concat([tail]);
  };

  const compose = (...fns) =>
    arg => fns.reduce((composed, fn) => fn(composed), arg);

  exports.isArray = isArray;
  exports.get = get;
  exports.flatten = flatten$$1;
  exports.curry = curry;
  exports.compact = compact;
  exports.pipe = pipe;
  exports.union = union$$1;
  exports.debounce = debounce;
  exports.fromPairs = fromPairs;
  exports.pull = pull$$1;
  exports.reject = reject$$1;
  exports.sortBy = sortBy;
  exports.memo = memo;
  exports.chunk = chunk;
  exports.compose = compose;

  return exports;

}({}));

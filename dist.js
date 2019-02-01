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

  exports.get = get;
  exports.flatten = flatten;

  return exports;

}({}));

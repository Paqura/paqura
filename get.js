export default (arrayOfObjects, path, defaultValue) => {
  const resultArray = arrayOfObjects.map(
    item => item[path]
  );

  return resultArray.length ? resultArray : defaultValue;
};

const arr = [{name: 'first'}, {name: 'last'}];
const res = _get(arr, 'name', null);

console.log(res) // ['first', 'last']
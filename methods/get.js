export default (arrayOfObjects, path, defaultValue) => {
  const resultArray = arrayOfObjects.map(
    item => item[path]
  );

  return resultArray.length ? resultArray : defaultValue;
};
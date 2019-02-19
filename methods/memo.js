export const memo = fn => {
  let cache = {};
  let res;

  return (...args) => {
    const key = JSON.stringify(...args);

    if(cache[key]) {
      return cache[key];
    } else {
      res = fn.apply(this, args);
      cache[key] = res;
      return res;
    }
  }
};

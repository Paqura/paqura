export const fromPairs = pairs => {
  const res = {};

  pairs.forEach((item, idx) => res[item[0]] = item[1]);
  return res;
};
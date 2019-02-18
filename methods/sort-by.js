export const sortBy = (arr, key) => {
  if(!key) return arr;

  return arr.sort((previous, next) => previous[key].localeCompare(next[key]));
};
export const compose = (...fns) =>
  arg => fns.reduce((composed, fn) => fn(composed), arg);

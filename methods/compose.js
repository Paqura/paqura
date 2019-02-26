// Compose start from last func

export const compose = (...fns) =>
  arg => fns.reduceRight((composed, fn) => fn(composed), arg);

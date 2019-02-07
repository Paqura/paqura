export const debounce = (fn, ms) => {
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


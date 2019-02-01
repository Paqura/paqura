export default fn => {
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
}
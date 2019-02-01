const toLower = str => str.toLowerCase();
const trim = str => str.trim();

const result = pipe(
  '  Hello  ',
  trim,
  toLower,
); // hello
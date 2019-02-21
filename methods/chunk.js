export const chunk = (arr, len) => {
  if(!arr) return null;
  if(!len) return arr;

  const result = [];
  const tail = [...arr];

  while(tail.length > len) {
    result.push(tail.splice(0, len));
  }

  return result.concat([tail]);
};

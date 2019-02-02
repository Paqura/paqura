import {compact} from '../';

const example = [
  {name: 'delete', handler: function() {}},
  false && {name: 'change', handler: function() {}},
  null,
  undefined,
];

describe('Compact method', () => {
  it('should return empty array', () => {
    expect(compact([null, undefined, false])).toEqual([]);
  });

  it('should return empty array', () => {
    const expectedResult = JSON.stringify([{name: 'delete', handler: function() {}}]);

    expect(compact(example)).toBeTruthy();
    expect(JSON.stringify(compact(example))).toEqual(expectedResult);
  });
});
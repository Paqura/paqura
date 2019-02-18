import {reject} from '../index';

describe('reject function', () => {
  it('should return empty array if data is incorrect', () => {
    expect(reject({}, '2')).toEqual([]);
    expect(reject(null, null)).toEqual([]);
    expect(reject(undefined)).toEqual([]);
  });

  it('should return expected data', () => {
    const data = [{id: '1'}, {id: '2'}];
    const expectedData = [{id: '2'}];

    expect(reject(data, ['id', '1'])).toEqual(expectedData);
  });
});
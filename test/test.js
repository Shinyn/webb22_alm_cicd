const assert = require('assert');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Array tests', () => {
  it('Should sort the array', () => {
    const arr = [8, 5, 1, 0, 8, 9, 14];
    assert(arr.sort(), [0, 1, 5, 8, 8, 9, 14]);
  });
});

describe('Dummy test', () => {
  it('Should pass always', () => {
    assert(true);
  });
});

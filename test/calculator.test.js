const assert = require('assert');
const { Calculator } = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('getResult()', () => {
    it('should return 3 when adding 1 and 2', () => {
      assert.equal(calc.add(1, 2), 3);
    });
  });
});

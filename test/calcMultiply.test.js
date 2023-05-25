const assert = require('assert');
const { Calculator } = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('getResult()', () => {
    it('should return 25 when multiplying 5 and 5', () => {
      assert.equal(calc.multiply(5, 8), 25);
    });
  });
});

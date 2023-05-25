class Calculator {
  constructor() {
    this.result = 0;
  }

  add(n1, n2) {
    this.result = n1 + n2;
    return this.result;
  }

  multiply(n1, n2) {
    this.result = n1 * n2;
    return this.result;
  }

  getResult() {
    return this.result;
  }
}

module.exports = { Calculator };

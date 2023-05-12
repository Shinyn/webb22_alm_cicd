const express = require('express');
const { Calculator } = require('../src/calculator');

const router = express.Router();

router.get('/add', (req, res) => {
  const { val } = req.query;
  const n1 = parseFloat(val[0]);
  const n2 = parseFloat(val[1]);

  const result = new Calculator();
  res.json(result.add(n1, n2));
});

module.exports = router;

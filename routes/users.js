const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json('RF, MA, HA, TB');
});

module.exports = router;

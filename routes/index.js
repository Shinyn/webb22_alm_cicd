const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Pandamonium', image: '/public/images/pandamonium.jpg' });
});

module.exports = router;

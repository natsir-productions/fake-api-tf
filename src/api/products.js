const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('hai ajijoy')
});

module.exports = router;
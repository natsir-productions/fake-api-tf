const express = require('express');
const { PRODUCTS } = require('../global');
const router = express.Router();

router.get('/', async (req, res) => {
  const products = PRODUCTS;
  res.status(200).send({
    products
  });
});

module.exports = router;
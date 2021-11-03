const express = require('express');
const { PRODUCTS } = require('../global');
const { getProduct } = require('../services/products');
const router = express.Router();


// GET ALL PRODUCTS
router.get('/', async (req, res) => {
  const products = PRODUCTS;
  res.status(200).send({
    products
  });
});


// GET SINGLE PRODUCTS
router.get('/:id', async (req, res) => {
  const productId = req.params['id'];

  if (productId === undefined) {
    res.status(400).send('id product is required.');
  }
  
  try {
    const product = await getProduct(productId);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


module.exports = router;

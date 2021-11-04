const mongoose = require('mongoose');
const { PRODUCTS } = require("../global");


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  colors: [ String ],
  _dateCreated: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);


async function getProducts() {
  const products = await Product.find();
  return products;
}


/**
 * @param {string} productId 
 */
async function getProduct(productId) {
  // todo query db
  const product = PRODUCTS.filter(product => product.id == productId);

  if (product.length === 0) {
    throw new Error(`Product with given id ${productId} not found.`)
  } else if (product.length > 1) {
    throw new Error('Duplicate product found. Check db manually.');
  } else {
    return {
      product: product[0]
    }
  }
}


/**
 * @param {JSON} data 
 */
async function addProduct(data) {
  const product = new Product(data);
  const result = await product.save();
  return result;
}


/**
 * @param {string} productId 
 * @param {JSON} data 
 */
async function updateProduct(productId, data) {
  // todo query db
  const product = PRODUCTS.filter(product => product.id == productId);
  if (Object.keys(product).length === 0) {
    throw new Error(`Product with given id ${productId} not found`);
  }

  // case sensitive
  // if key not match in existing data, that key will be added
  // as new key in product data
  for (const [key, value] of Object.entries(data)) {
    product[0][key] = value;
  }

  return {
    product: product[0]
  }
}


/**
 * @param {string} productId 
 */
async function deleteProduct(productId) {
  // todo query db
  const productIndex = PRODUCTS.findIndex(p => p.id == productId);
  if (productIndex === -1) {
    throw new Error(`Product with given id ${productId} not found`);
  }

  // deleting that product
  PRODUCTS.splice(productIndex);
}


module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
}

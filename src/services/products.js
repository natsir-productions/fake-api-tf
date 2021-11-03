const { PRODUCTS } = require("../global");

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
  // todo query db
  const newProduct = Object.assign({
    id: PRODUCTS.length + 1
  }, data);

  PRODUCTS.push(newProduct);
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


module.exports = {
  getProduct,
  addProduct,
  updateProduct
}

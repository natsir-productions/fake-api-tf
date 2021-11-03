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


module.exports = {
  getProduct
}

const express = require('express');
const cors = require('cors');

const productsRouting = require('./src/api/products');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/fake-api-tf/products', productsRouting);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});

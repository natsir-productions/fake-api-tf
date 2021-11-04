const mongoose =  require('mongoose');
const express = require('express');
const cors = require('cors');

const productsRouting = require('./src/api/products');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productsRouting);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});

mongoose.connect('mongodb://localhost/db-fatf')
  .then(() => console.log('connected to mongodb...'))
  .catch(err => console.error('could not connect to mongodb', err))

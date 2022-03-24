const express = require('express');
const {
  getAllProducts,
  addProducts,
  deleteProduct,
  updeteProduct,
} = require('./eMarketController');
const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', addProducts);
router.delete('/delete/:id', deleteProduct);
router.put('/update/:id', updeteProduct);

module.exports = router;

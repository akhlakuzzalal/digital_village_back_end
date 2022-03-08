const express = require('express');
const {
  getAllProducts,
  addProducts,
  deleteProduct,
} = require('../controller/eMarketController');
const validateUser = require('../middlewares/validateUser');
const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', addProducts);
router.delete('/delete/:id', deleteProduct);

module.exports = router;

const express = require('express');
const {
  getAllProducts,
  addProducts,
} = require('../controller/eMarketController');
const validateUser = require('../middlewares/validateUser');
const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', addProducts);

module.exports = router;

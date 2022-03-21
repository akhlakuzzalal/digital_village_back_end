const express = require('express');
const {
  getAllProducts,
  addProducts,
  deleteProduct,
  updeteProduct,
  getAllMedicine,
} = require('../controller/eMarketController');
const validateUser = require('../middlewares/validateUser');
const router = express.Router();

router.get('/products', getAllProducts);
router.get('/medicines', getAllMedicine);
router.post('/products', addProducts);
router.delete('/delete/:id', deleteProduct);
router.put('/update/:id', updeteProduct);

module.exports = router;

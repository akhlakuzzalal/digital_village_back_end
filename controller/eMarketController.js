const Products = require('../schemas/EMarketSchema/ProductsSchema');

// get all Products
const getAllProducts = async (req, res, next) => {
  try {
    const response = await Products.find();
    res.json(response);
  } catch (error) {
    next(error);
  }
};

// Add Products
const addProducts = async (req, res, next) => {
  try {
    const newProducts = req.body;
    const response = await Products.insertMany(newProducts);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

//   export controllers
module.exports = {
  getAllProducts,
  addProducts,
};

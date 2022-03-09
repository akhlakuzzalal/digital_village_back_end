const Products = require('../schemas/EMarketSchema/ProductsSchema');

// get all Products
const getAllProducts = async (req, res, next) => {
  console.log('Hitt');
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

// Delete Product
const deleteProduct = async (req, res, next) => {
  console.log('hitted', req.params.id);
  try {
    const id = req.params.id;
    const query = { _id: id };
    const responce = await Products.findOneAndDelete(query);
    res.json(responce);
  } catch (error) {
    next(error);
  }
};

// Update a Product
const updeteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateProduct = req.body;
    console.log(updateProduct);
    const filter = { _id: id };

    const response = await Products.updateOne(filter, {
      $set: updateProduct,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

//   export controllers
module.exports = {
  getAllProducts,
  addProducts,
  deleteProduct,
  updeteProduct,
};

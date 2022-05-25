const Roles = require('../config/roles');
const Products = require('../schemas/ProductsSchema');
const Order = require('../schemas/OrderSchema');
const { filterProducts } = require('../utilities/Filter');

// get all Products
const getAllProducts = async (req, res, next) => {
  let { page, size, roles, search } = req.query;
  if (roles) {
    roles = JSON.parse(roles);
  }
  try {
    let count;
    const isAdmin = roles && roles.length > 0 && roles.includes(Roles.Admin);

    if (isAdmin) {
      if (
        search !== 'undefined' &&
        page !== 'undefined' &&
        size !== 'undefined'
      ) {
        const allProducts = await Products.find();
        const allFilteredProducts = filterProducts(allProducts, search);
        count = allFilteredProducts.length; // count will be only filtered products from all products

        const sendProducts = parseInt(page)
          ? parseInt(page) < parseInt(size)
            ? allFilteredProducts.slice(parseInt(page) * 10)
            : allFilteredProducts.slice(parseInt(page) * 10, parseInt(size))
          : allFilteredProducts.slice(parseInt(page), parseInt(size));

        return res.json({
          count,
          products: sendProducts,
        });
      } else {
        count = await Products.count({}); // count will be all products
      }
    } else {
      if (
        search !== 'undefined' &&
        page !== 'undefined' &&
        size !== 'undefined'
      ) {
        const allVerifiedProducts = await Products.find({
          isMedicine: false,
        });
        const allVerifiedFilteredProducts = filterProducts(
          allVerifiedProducts,
          search
        );
        count = allVerifiedFilteredProducts.length; // count will be all filtered products from verified products
        const sendProducts = parseInt(page)
          ? parseInt(page) < parseInt(size)
            ? allVerifiedFilteredProducts.slice(parseInt(page) * 10)
            : allVerifiedFilteredProducts.slice(
                parseInt(page) * 10,
                parseInt(size)
              )
          : allVerifiedFilteredProducts.slice(parseInt(page), parseInt(size));

        return res.json({
          count,
          products: sendProducts,
        });
      } else {
        count = await Products.count({ isVerified: true }); // count will be all verified products
      }
    }

    let products;

    if (isAdmin) {
      if (page !== 'undefined' && size !== 'undefined') {
        products = await Products.find({}) // admin can access all products
          .skip(parseInt(page) * parseInt(size))
          .limit(parseInt(size));
      } else {
        products = await Products.find(); // send all if pagination query is not avialble
      }
    } else {
      if (page !== 'undefined' && size !== 'undefined') {
        products = await Products.find({
          isVerified: true,
          isMedicine: false,
        })
          .skip(parseInt(page) * parseInt(size))
          .limit(parseInt(size)); // a normal user can only see products that are verified
      } else {
        products = await Products.find({ isVerified: true, isMedicine: false }); // send all if pagination query is not avialble
      }
    }

    res.json({
      count,
      products,
    });
  } catch (error) {
    next(error);
  }
};

const getProductsForAdmin = async (req, res, next) => {
  try {
    const allProducts = await Products.find({});
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
};

// Get medecines
const getAllMedicine = async (req, res, next) => {
  try {
    const allMedicine = await Products.find({ isMedicine: true });
    res.json(allMedicine);
  } catch (err) {
    next(err);
  }
};

// Add Products
const addProducts = async (req, res, next) => {
  try {
    const newProducts = req.body;
    let response;
    if (newProducts.categorie !== 'medecine') {
      response = await Products.insertMany({
        ...newProducts,
        isVerified: true,
        isMedicine: false,
      });
    } else {
      response = await Products.insertMany({
        ...newProducts,
        isVerified: true,
        isMedicine: true,
      });
    }
    res.json(response);
  } catch (error) {
    next(error);
  }
};

// Delete Product
const deleteProduct = async (req, res, next) => {
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
    const filter = { _id: id };

    const response = await Products.updateOne(filter, {
      $set: updateProduct,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

// get User Order
const getUserOrder = async (req, res, next) => {
  const { email } = req.query;
  console.log(email, 'Email from order hitting');
  try {
    const response = await Order.find({ email: email });
    res.json(response);
  } catch (err) {
    next(err);
  }
};

// add User Order
const addUserOrder = async (req, res, next) => {
  const data = req.body;
  try {
    await Order.insertMany(data);
    res.json('addOrder');
  } catch (err) {
    next(err);
  }
};

//  export controllers
module.exports = {
  getAllProducts,
  addProducts,
  deleteProduct,
  updeteProduct,
  getAllMedicine,
  getProductsForAdmin,
  addUserOrder,
  getUserOrder,
};

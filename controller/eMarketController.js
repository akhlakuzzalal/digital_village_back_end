const Roles = require('../config/roles');
const Products = require('../schemas/EMarketSchema/ProductsSchema');
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
      if (search && page && size) {
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
      if (search && page && size) {
        const allVerifiedProducts = await Products.find({ isVerified: true });
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
      if (page && size) {
        products = await Products.find() // admin can access all products
          .skip(parseInt(page) * parseInt(size))
          .limit(parseInt(size));
      } else {
        products = await Products.find(); // send all if pagination query is not avialble
      }
    } else {
      if (page && size) {
        products = await Products.find({ isVerified: true })
          .skip(parseInt(page) * parseInt(size))
          .limit(parseInt(size)); // a normal user can only see products that are verified
      } else {
        products = await Products.find({ isVerified: true }); // send all if pagination query is not avialble
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

// Add Products
const addProducts = async (req, res, next) => {
  try {
    const newProducts = req.body;
    const response = await Products.insertMany({
      ...newProducts,
      isVerified: true,
    });
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

//   export controllers
module.exports = {
  getAllProducts,
  addProducts,
  deleteProduct,
  updeteProduct,
};

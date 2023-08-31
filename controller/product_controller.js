const mongoose = require("mongoose");
const model = require("../model/product");

const Product = model.Product;

// MVC Model-View_controller

// Create  POST --- API  /products
exports.createProduct = async (req, res) => {
  // try {
  //   const product = new Product(req.body);
  //   const saveProduct = await product.save();
  //   console.log(saveProduct);

  // } catch (err) {
  //   console.log(err);
  // }
  const product = new Product(req.body);
  product
    .save()
    .then((doc) => {
      console.log(doc);
      res.status(201).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(201).json(err);
    });
};

// Read GET /products --- 2 TYPES OF
exports.getAllProduct = async (req, res) => {
  const products = await Product.find({ price: { $lt: 300 } });
  res.json(products);
};

// Read GET API  /products/:id
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const product = await Product.findById(id);
  res.json(product);
};

// Update  PUT API  /products/:id
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body);
    // res.json({product:"product _ updated "});

    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// Update  PATCH (API)  /products/:id
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(201).json(doc);
  try {
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

  res.status(201).json();
};

// Delete  DELETE API  /products/:id
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

};

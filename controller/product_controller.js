const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
// const express = require("express");

// MVC Model-View_controller

// Create  POST --- API  /products
exports.createProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(res.body);
  res.status(201).json(req.body);
};

// Read GET /products --- 2 TYPES OF
exports.getAllProduct = (req, res) => {
  console.log(req.params);
  res.json(products);
};

// Read GET API  /products/:id
exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

// Update  PUT API  /products/:id
exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  // res.json({product:"product _ updated "});

  res.status(201).json();
};

// Update  PATCH (API)  /products/:id
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });

  res.status(201).json();
};

// Delete  DELETE API  /products/:id
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);

  res.status(201).json(product);
};

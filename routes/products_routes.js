const express = require("express");

const productController = require("../controller/product_controller");

const router = express.Router();

router
  .post("/", productController.createProduct)

  .get("/", productController.getAllProduct)

  .get("/:id", productController.getProduct)

  .put("/:id", productController.replaceProduct)

  .patch("/:id", productController.updateProduct)

  .delete("/:id", productController.deleteProduct);

exports.routes = router;

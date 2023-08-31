require("dotenv").config();

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// mongoose imported -----------------------//
const mongoose = require("mongoose");

// -----------------------------------------//

const express = require("express");
const server = express();
const productRouter = require("./routes/products_routes");
const userRouter = require("./routes/user_routes");

// DB connection
// mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

  console.log("database connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



// middleware
// body parser
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.routes);
server.use("/users", userRouter.routes);

// MVC Model Pattern

server.listen(process.env.PORT, () => {
  console.log("server started");
});

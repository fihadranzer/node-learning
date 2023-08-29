const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const express = require("express");
const server = express();
const productRouter = require("./routes/products_routes");
const userRouter = require("./routes/user_routes");
// body parser
server.use(express.json());
server.use(express.static("public"));
server.use("/products", productRouter.routes);
server.use("/users", userRouter.routes);

// MVC Model Pattern

server.listen(8080, () => {
  console.log("server started");
});

require = require("esm")(module /*, options*/);
const path = require("path");
require("dotenv").config(path.join(__dirname, ".env"));
const { ProductsServer } = require("./serverApi/server");

new ProductsServer().start();

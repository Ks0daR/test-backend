import express from "express";
import cors from "cors";
import db from "./database/db";
import { createTable, dropTable } from "./database/db.queries";
import { productsRouter } from "./products/products.router";
import { addProductsInDB } from "./database/products";

const PORT = process.env.PORT || 8080;

export class ProductsServer {
  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    this.initMiddleware();
    await this.initDbConnect();
    this.initRoutes();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  initMiddleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  async initDbConnect() {
    try {
      await db.query(dropTable);
      await db.query(createTable);
      await db.query(addProductsInDB);
      console.log("Connect to DB success");
    } catch (err) {
      console.log("Error connect to db");
      process.exit(1);
    }
  }

  initRoutes() {
    this.server.use("/products", productsRouter);
  }

  startListening() {
    this.server.listen(PORT, () => {
      console.log(`Server started and listens port ${PORT}`);
    });
  }
}

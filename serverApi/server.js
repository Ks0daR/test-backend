import express from "express";
import { productsRouter } from "./products/products.router";
import pg, { Client } from "pg";
import { Sequelize } from "sequelize";

const PORT = process.env.PORT || 8080;

// const sequelize = new Sequelize(process.env.DATABASE_URL)

const client = new Client({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DB,
  password: process.env.DBPASS,
  port: process.env.DBPORT,
  ssl: { rejectUnauthorized: false },
});

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
  }

  async initDbConnect() {
    try {
      await client.connect();
      client.query("SELECT NOW()", (err, res) => {
        console.log(err, res);
        client.end();
      });
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

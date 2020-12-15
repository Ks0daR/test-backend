import express from "express";

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
  }

  async initDbConnect() {
    try {
     
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

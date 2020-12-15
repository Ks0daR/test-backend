import { createControllerProxy } from "../helpers/controllerProxy";

class ProductsController {
  async getAllProducts(req, res, next) {
    try {
      
      const products = await linksModel.getAllLinks(userId, 2, 2);
      

      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  async createNewProduct(req, res, next) {
    try {
      const { from } = req.body;
      const serverLink = process.env.SERVER_URL;

      return res.status(201).json();
    } catch (err) {
      next(err);
    }
  }
  async getProductById(req, res, next) {
    try {
      const productId = req.params.id;

      return res.status(200).json();
    } catch (err) {
      next(err);
    }
  }
}

export const productsController = createControllerProxy(new LinksController());

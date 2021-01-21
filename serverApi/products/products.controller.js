import db from "../database/db";
import { insertInto, getAll, updateProduct } from "../database/db.queries";

class ProductsController {
  async createNewProduct(req, res) {
    const { img, name, price, description } = req.body;
    const newProduct = await db.query(insertInto, [
      img,
      name,
      price,
      description,
    ]);

    res.status(201).json(newProduct.rows[0]);
  }

  async getAllProducts(req, res) {
    const products = await db.query(getAll);
    res.status(200).json(products.rows);
  }

  async updateProduct(req, res) {
    const { id, img, name, price, description } = req.body;

    const updatedProduct = await db.query(updateProduct, [
      img,
      name,
      price,
      description,
      id,
    ]);

    res.status(201).json(updatedProduct.rows[0]);
  }
  async deleteProduct(req, res) {
    const id = req.params.id;

    const user = await db.query(deleteProduct, [id]);

    res.status(204).json(user);
  }
}

export const productsController = new ProductsController();

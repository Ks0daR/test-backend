import db from "../database/db";

class ProductsController {
  async createNewProduct(req, res) {
    const { img, sity, quantity, description } = req.body;
    const newProduct = await db.query(
      "INSERT INTO product (img, sity, quantity, description) values ($1, $2, $3, $4) RETURNING *",
      [img, sity, quantity, description]
    );

    res.status(201).json(newProduct.rows[0]);
  }

  async getAllProducts(req, res) {
    const products = await db.query("SELECT * FROM product");
    res.status(200).json(products.rows);
  }

  async updateProduct(req, res) {
    const { id, img, sity, quantity, description } = req.body;

    const updatedProduct = await db.query(
      "UPDATE product set img = $1, sity = $2, quantity = $3, description = $4 where id = $5 RETURNING *",
      [img, sity, quantity, description, id]
    );

    res.status(201).json(updatedProduct);
  }
  async deleteProduct(req, res) {
    const id = req.params.id;

    const user = await db.query("DELETE FROM product where id = $1", [id]);

    res.status(204).json(user);
  }
}

export const productsController = new ProductsController();

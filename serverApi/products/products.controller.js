import db from "../database/db";

class ProductsController {
  async createNewProduct(req, res) {
    const { img, name, price, description } = req.body;
    const newProduct = await db.query(
      "INSERT INTO product (img, name, price, description) values ($1, $2, $3, $4) RETURNING *",
      [img, name, price, description]
    );

    res.status(201).json(newProduct.rows[0]);
  }

  async getAllProducts(req, res) {
    const products = await db.query("SELECT * FROM product");
    res.status(200).json(products.rows);
  }

  async updateProduct(req, res) {
    const { id, img, name, price, description } = req.body;

    const updatedProduct = await db.query(
      "UPDATE product set img = $1, name = $2, price = $3, description = $4 where id = $5 RETURNING *",
      [img, name, price, description, id]
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

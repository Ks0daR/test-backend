export const createTable =
  "CREATE TABLE IF NOT EXISTS product(id SERIAL PRIMARY KEY, img VARCHAR(1000), name VARCHAR(255), description VARCHAR(1000), price VARCHAR(255));";

export const dropTable = "DROP TABLE IF EXISTS product";

export const insertInto =
  "INSERT INTO product (img, name, price, description) values ($1, $2, $3, $4) RETURNING *";

export const getAll = "SELECT * FROM product";

export const updateProduct =
  "UPDATE product set img = $1, name = $2, price = $3, description = $4 where id = $5 RETURNING *";

export const deleteProduct = "DELETE FROM product where id = $1";

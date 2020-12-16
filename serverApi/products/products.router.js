import { Router } from "express";
import { productsController } from "./products.controller";

const router = Router();

router.get("/", productsController.getAllProducts);
router.post("/", productsController.createNewProduct);
router.put("/", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

export const productsRouter = router;

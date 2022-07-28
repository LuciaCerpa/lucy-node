import express from "express";
import { getAllproducts, createProduct, updateProduct, deleteProduct }  from "../controllers/products.controller.js";

const productsRouter = express.Router();

productsRouter.get("/", getAllproducts)
productsRouter.post("/", createProduct)
productsRouter.patch("/", updateProduct)
productsRouter.delete("/", deleteProduct)

export default productsRouter;
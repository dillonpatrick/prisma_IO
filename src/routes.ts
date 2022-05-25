import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategory";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const productCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategory();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/productCategory", productCategory.handle);
router.post("/createProductCategoryExist", createProductCategoryExist.handle);

export { router };

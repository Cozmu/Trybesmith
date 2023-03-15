import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProducts from '../middlewares/validateProducts';

const router = Router();

router.post('/', validateProducts, productsController.registerNewProduct);
router.get('/', productsController.listAllProducts);

export default router;
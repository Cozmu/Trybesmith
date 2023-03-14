import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();

router.post('/', productsController.registerNewProduct);
router.get('/', productsController.listAllProducts);

export default router;
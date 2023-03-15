import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken';
import validateOrders from '../middlewares/validateOrders';

const router = Router();

router.get('/', ordersController.listAllOrders);
router.post(
  '/', 
  validateToken,
  validateOrders,
  ordersController.registerNewOrder,
);

export default router;
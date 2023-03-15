import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const listAllOrders = async (_req:Request, res:Response) => {
  const result = await ordersService.getAllOrders();
  return res.status(200).json(result);
};

const registerNewOrder = async (req:Request, res:Response) => {
  const { productsIds, user } = req.body;
  await ordersService.registerNewOrder(productsIds, user.id);
  return res.status(201).json({ userId: user.id, productsIds });
};

const ordersController = { registerNewOrder, listAllOrders };

export default ordersController;

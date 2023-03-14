import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const listAllOrders = async (req:Request, res:Response) => {
  const result = await ordersService.getAllOrders();
  return res.status(200).json(result);
};

const ordersController = { listAllOrders };

export default ordersController;

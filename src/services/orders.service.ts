import { IOrder } from '../interfaces';
import ordersModel from '../models/orders.model';

const getAllOrders = async ():Promise<IOrder[]> => {
  const result = await ordersModel.findAllOrders();
  return result;
};

const ordersService = { getAllOrders };

export default ordersService;
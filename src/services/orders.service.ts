import { IOrder } from '../interfaces';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';

const getAllOrders = async ():Promise<IOrder[]> => {
  const result = await ordersModel.findAllOrders();
  return result;
};

const registerNewOrder = async (productsIds:number[], userId:number):Promise<void> => {
  const result = await ordersModel.createNewOrder(userId);
  await Promise.all(productsIds.map((ids) => productsModel.updateProduct(ids, result)));
};

const ordersService = { registerNewOrder, getAllOrders };

export default ordersService;
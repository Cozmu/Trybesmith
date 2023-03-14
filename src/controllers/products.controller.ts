import { Request, Response } from 'express';
// import { IProducts } from '../interfaces';
import productsService from '../services/products.service';

const registerNewProduct = async (req:Request, res:Response) => {
  const { message } = await productsService.registerNewProduct(req.body);
  return res.status(201).json(message);
}; 

const listAllProducts = async (req: Request, res: Response) => {
  const { message } = await productsService.getAllProducts();
  return res.status(200).json(message);
};

const productsController = { listAllProducts, registerNewProduct };

export default productsController;
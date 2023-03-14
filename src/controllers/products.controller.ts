import { Request, Response } from 'express';
// import { IProducts } from '../interfaces';
import productsService from '../services/products.service';

const registerNewProduct = async (req:Request, res:Response) => {
  const result = await productsService.registerNewProduct(req.body);
  return res.status(201).json(result);
}; 

const listAllProducts = async (req: Request, res: Response) => {
  const result = await productsService.getAllProducts();
  return res.status(200).json(result);
};

const productsController = { listAllProducts, registerNewProduct };

export default productsController;
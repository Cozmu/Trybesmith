import { IProducts } from '../interfaces';
import productsModel from '../models/products.model';

const registerNewProduct = async (body:IProducts)
:Promise<{ type: null | string, message: IProducts | string }> => {
  const result = await productsModel.createNewProduct(body);
  return { type: null, message: result };
};

const getAllProducts = async ():Promise<{ type: null, message: IProducts[] }> => {
  const result = await productsModel.findAllProducts();
  return { type: null, message: result };
};

const productsService = { getAllProducts, registerNewProduct };

export default productsService;
import { IProducts } from '../interfaces';
import productsModel from '../models/products.model';

const registerNewProduct = async (body:IProducts):Promise<IProducts> => {
  const result = await productsModel.createNewProduct(body);
  return result;
};

const productsService = { registerNewProduct };

export default productsService;
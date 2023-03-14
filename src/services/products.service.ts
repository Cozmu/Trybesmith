import { IProducts } from '../interfaces';
import productsModel from '../models/products.model';

const registerNewProduct = async (body:IProducts)
:Promise<{ type: null | string, message: IProducts | string }> => {
  const result = await productsModel.createNewProduct(body);
  return { type: null, message: result };
};

const productsService = { registerNewProduct };

export default productsService;
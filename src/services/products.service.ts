import { IProducts } from '../interfaces';
import productsModel from '../models/products.model';

const registerNewProduct = async (body:IProducts)
:Promise<IProducts> => {
  const result = await productsModel.createNewProduct(body);
  return result;
};

const getAllProducts = async ():Promise<IProducts[]> => {
  const result = await productsModel.findAllProducts();
  return result;
};

const productsService = { getAllProducts, registerNewProduct };

export default productsService;
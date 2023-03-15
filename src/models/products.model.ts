import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts } from '../interfaces';

const createNewProduct = async (body:IProducts):Promise<IProducts> => {
  const { name, amount } = body;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: insertId, ...body };
}; 

const findAllProducts = async ():Promise<IProducts[]> => {
  const [result] = await connection.execute<IProducts[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return result;
};

const updateProduct = async (productIds:number, orderId:number):Promise<void> => {
  await connection.execute(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [orderId, productIds],
  );
};

const productsModel = { findAllProducts, createNewProduct, updateProduct };

export default productsModel;
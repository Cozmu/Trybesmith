import { /* RowDataPacket, */ ResultSetHeader } from 'mysql2';
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

const productsModel = { createNewProduct };

export default productsModel;
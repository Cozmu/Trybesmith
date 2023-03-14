import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IOrder } from '../interfaces';

const findAllOrders = async ():Promise<IOrder[]> => {
  const [result] = await connection.execute<RowDataPacket[] & IOrder[]>(
    `SELECT ord.id, ord.user_id AS userId, JSON_ARRAYAGG(pro.id) AS productsIds 
    FROM Trybesmith.orders AS ord INNER JOIN Trybesmith.products AS pro
    ON ord.id = pro.order_id GROUP BY pro.order_id;`,
  );
  return result;
};

const ordersModel = { findAllOrders };

export default ordersModel;
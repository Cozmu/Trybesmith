import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IToken } from '../interfaces';

const checkUser = async (name: string, password: string):Promise<IToken> => {
  const [[result]] = await connection.execute<IToken[] & RowDataPacket[]>(
    `SELECT id, username, vocation, level 
    FROM Trybesmith.users WHERE username = ? AND password = ?`,
    [name, password],
  );
  
  return result;
};

const loginModel = { checkUser };

export default loginModel;
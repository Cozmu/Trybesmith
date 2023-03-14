import { /* RowDataPacket, */ ResultSetHeader } from 'mysql2';
import { IUser, IToken } from '../interfaces';
import connection from './connection';

const createNewUser = async (body:IUser):Promise<IToken> => {
  const { username, vocation, level, password } = body;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { id: insertId, username, vocation, level };
};

const usersModel = { createNewUser };

export default usersModel;
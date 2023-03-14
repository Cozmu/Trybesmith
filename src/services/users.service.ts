import usersModel from '../models/users.model';
import { IUser, IToken } from '../interfaces';

const registerNewUser = async (body:IUser)
:Promise<{ type: null | string, message: IToken | string }> => {
  const result = await usersModel.createNewUser(body);
  return { type: null, message: result };
};

const usersService = { registerNewUser }; 

export default usersService;
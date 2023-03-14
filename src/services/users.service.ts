import usersModel from '../models/users.model';
import { IUser, IToken } from '../interfaces';

const registerNewUser = async (body:IUser)
:Promise<IToken> => {
  const result = await usersModel.createNewUser(body);
  return result;
};

const usersService = { registerNewUser }; 

export default usersService;
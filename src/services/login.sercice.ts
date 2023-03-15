import { IToken } from '../interfaces';
import loginModel from '../models/login.model';

const login = async (name: string, password: string):Promise<IToken | void> => {
  const result = await loginModel.checkUser(name, password);
  
  return result;
};

const loginService = { login };

export default loginService;
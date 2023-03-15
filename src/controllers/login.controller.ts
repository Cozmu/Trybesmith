import { Response, Request } from 'express';
import authFunctions from '../auth/authFunctions';
import loginService from '../services/login.sercice';

const login = async (req:Request, res:Response) => {
  const { username, password } = req.body;
  const result = await loginService.login(username, password);
  if (!result) return res.status(401).json({ message: 'Username or pasword invalid' });
  const token = authFunctions.createToken({ // perguntar pq colocando o result direto nao da certo
    id: result.id, 
    username: result.username, 
    vocation: result.vocation, 
    level: result.level, 
  });
  return res.status(200).json({ token });
};

const loginController = { login };

export default loginController;
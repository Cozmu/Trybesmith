import { Request, Response } from 'express';
import usersService from '../services/users.service';
import authFunctions from '../auth/authFunctions';

const registerNewUser = async (req:Request, res:Response) => {
  const result = await usersService.registerNewUser(req.body);
  const token = authFunctions.createToken(result);
  return res.status(201).json({ token });
};

const usersController = { registerNewUser };

export default usersController;
import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IToken } from '../interfaces';

dotenv.config();

const SECRETE = process.env.JWT_SECRET || 'COSMU';

const JWT_CONFIG:SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const createToken = (data:IToken):string => jwt.sign(data, SECRETE, JWT_CONFIG);

const verifyToken = (token:string) => jwt.verify(token, SECRETE); 
const authFunctions = { createToken, verifyToken };

export default authFunctions;

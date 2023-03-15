import { Response, Request, NextFunction } from 'express';
import validations from './validations/schemas';

const validateLogin = (req:Request, res:Response, next:NextFunction) => {
  const { error } = validations.validateLoginEntries.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  return next();
};

export default validateLogin;
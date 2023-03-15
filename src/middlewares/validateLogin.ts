import { Response, Request, NextFunction } from 'express';
// import validations from './validations/schemas';

const validateLogin = (req:Request, res:Response, next:NextFunction) => {
  console.log(req.body);
  
  // const { error } = validations.validateEntries(req.body);
  // if (error) return res.status(400).json({ message: error });
  return next();
};

export default validateLogin;
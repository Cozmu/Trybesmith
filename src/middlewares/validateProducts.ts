import { Request, Response, NextFunction } from 'express';
import validations from './validations/schemas';

const validateProducts = async (req:Request, res:Response, next:NextFunction) => {
  const { error } = validations.validateNewProducts.validate(req.body);
  const errorType = error?.details[0].type;
  if (error && errorType === 'any.required') {
    return res.status(400).json({ message: error.message });
  }
  if (error) {
    return res.status(422).json({ message: error.message });
  }
  return next();
};

export default validateProducts;
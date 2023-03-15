import Joi from 'joi';

const validateLoginEntries = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validateNewProducts = Joi.object().keys({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validateNewUsers = Joi.object().keys({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validateNewOrders = Joi.array().min(1).required()
  .messages({ 
    'array.min': '"productsIds" must include only numbers', 
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
  });

const validations = { 
  validateLoginEntries, 
  validateNewProducts,
  validateNewUsers,
  validateNewOrders,
};

export default validations;
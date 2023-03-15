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

const validations = { 
  validateLoginEntries, 
  validateNewProducts,
  validateNewUsers,
};

export default validations;
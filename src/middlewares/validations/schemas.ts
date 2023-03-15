import Joi from 'joi';

const validateLoginEntries = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validateNewProducts = Joi.object().keys({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validations = { validateLoginEntries, validateNewProducts };

export default validations;
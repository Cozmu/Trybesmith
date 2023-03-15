import Joi from 'joi';

const validateLoginEntries = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': '"{#key}" is required',
});

// const validate;

const validations = { validateLoginEntries };

export default validations;
import Joi from 'joi';

const validateEntries = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': '"{#key}" is required',
});

const validations = { validateEntries };

export default validations;
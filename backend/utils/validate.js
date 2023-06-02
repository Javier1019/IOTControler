const { ValidationError } = require('joi');

function validate(data, schema) {
  const joiSchema = Joi.object(schema);
  const { error } = joiSchema.validate(data);

  if (error) {
    throw new ValidationError(error.details);
  }
}

module.exports = {
  validate
};

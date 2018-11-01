const Joi = require("joi");

module.exports = {
  userValidate: function(req) {
    const schema = {
      name: Joi.string()
        .min(1)
        .max(50)
        .required(),
      email: Joi.string()
        .min(5)
        .max(50)
        .required()
        .email(),
      password: Joi.string()
        .min(5)
        .max(255)
        .required()
    };

    return Joi.validate(req, schema);
  },

  userAuthValidate: function(req) {
    const schema = {
      email: Joi.string()
        .min(5)
        .max(50)
        .required()
        .email(),
      password: Joi.string()
        .min(5)
        .max(255)
        .required()
    };

    return Joi.validate(req, schema);
  }
};

const Joi = require("joi");

exports.registerSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email()
        .lowercase()
        .required(),

    password: Joi.string()
        .min(8)
        .required()
});

exports.loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(6)
        .required()
});

exports.refreshTokenSchema = Joi.object({
    refreshToken: Joi.string()
        .required()
});



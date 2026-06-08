const Joi = require("joi");

exports.buyStockSchema =
Joi.object({

    symbol: Joi.string()
        .uppercase()
        .required(),

    quantity: Joi.number()
        .integer()
        .positive()
        .required(),

    price: Joi.number()
        .positive()
        .required()

});

exports.sellStockSchema =
Joi.object({

    symbol: Joi.string()
        .uppercase()
        .required(),

    quantity: Joi.number()
        .integer()
        .positive()
        .required(),

    price: Joi.number()
        .positive()
        .required()

});
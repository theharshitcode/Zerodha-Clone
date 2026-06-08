const Joi = require("joi");

exports.addStockSchema =
Joi.object({

    symbol: Joi.string()
        .uppercase()
        .required()

});
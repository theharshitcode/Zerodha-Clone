const Joi = require("joi");

exports.searchStockSchema =
Joi.object({

    q: Joi.string()
        .trim()
        .min(1)
        .required()

});

exports.stockSymbolSchema =
Joi.object({

    symbol: Joi.string()
        .trim()
        .uppercase()
        .required()

});
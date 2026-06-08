const Stock = require("../models/StockModel");

module.exports = async (symbol) => {

    const stock =
        await Stock.findOne({
            symbol:
            symbol.toUpperCase()
        });

    return stock;
};
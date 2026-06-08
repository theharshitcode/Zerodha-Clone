const Stock =
require("../models/StockModel");

exports.getAllStocks =
async () => {
    return await Stock.find();
};

exports.getStockBySymbol =
async (symbol) => {

    return await Stock.findOne({
        symbol:
        symbol.toUpperCase()
    });
};

exports.searchStocks =
async (query) => {

    return await Stock.find({
        $or: [
            {
                symbol: {
                    $regex: query,
                    $options: "i"
                }
            },
            {
                companyName: {
                    $regex: query,
                    $options: "i"
                }
            }
        ]
    });
};
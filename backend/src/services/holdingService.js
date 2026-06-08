const Holding =
require("../models/HoldingModel");

exports.getHoldings =
async (userId) => {

    return await Holding.find({
        userId
    });
};

exports.getHoldingBySymbol =
async (
    userId,
    symbol
) => {

    return await Holding.findOne({
        userId,
        symbol
    });
};
const asyncHandler = require("../middlewares/asyncHandler");
const Order = require("../models/OrderModel");

const stockService =
require("../services/stockService");

exports.getAllStocks =
asyncHandler(async (req, res) => {

    const stocks =
        await stockService
            .getAllStocks();

    res.status(200).json({
        success: true,
        count: stocks.length,
        stocks
    });
});

exports.getStockBySymbol =
asyncHandler(async (req, res) => {

    const stock =
        await stockService
            .getStockBySymbol(
                req.params.symbol
            );

    res.status(200).json({
        success: true,
        stock
    });
});

exports.searchStocks =
asyncHandler(async (req, res) => {

    const stocks =
        await stockService
            .searchStocks(
                req.query.q
            );

    res.status(200).json({
        success: true,
        stocks
    });
});

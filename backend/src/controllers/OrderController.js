const asyncHandler = require("../middlewares/asyncHandler");
const orderService = require("../services/orderService");

exports.buyStock = asyncHandler(async (req, res) => {

    const order = await orderService.buyStock(
        req.user.userId,
        req.body
    );

    res.status(201).json({
        success: true,
        message: "Stock purchased",
        order
    });
});

exports.sellStock =
asyncHandler(async (req, res) => {

    const order =
        await orderService.sellStock(
            req.user.userId,
            req.body
        );

    res.status(201).json({
        success: true,
        message: "Stock sold",
        order
    });
});

exports.getTransactionHistory =
asyncHandler(async (req, res) => {

    const orders =
        await orderService.getHistory(
            req.user.userId
        );

    res.status(200).json({
        success: true,
        count: orders.length,
        orders
    });
});
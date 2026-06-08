const Order = require("../models/OrderModel");
const Holding = require("../models/HoldingModel");
const Stock = require("../models/StockModel");
const AppError = require("../utils/AppError");

exports.buyStock = async (
    userId,
    data
) => {

    const {
        symbol,
        quantity,
        price
    } = data;

    const upperSymbol = symbol.toUpperCase();

    // Verify stock exists
    const stockExists = await Stock.findOne({ symbol: upperSymbol });
    if (!stockExists) {
        throw new AppError("Invalid stock symbol", 400);
    }

    const order =
        await Order.create({
            userId,
            symbol: upperSymbol,
            quantity,
            price,
            type: "BUY"
        });

    let holding =
        await Holding.findOne({
            userId,
            symbol: upperSymbol
        });

    if (!holding) {

        holding =
            await Holding.create({
                userId,
                symbol: upperSymbol,
                quantity,
                avgPrice: price
            });

    } else {

        const totalCost =
            (holding.quantity *
                holding.avgPrice)
            +
            (quantity * price);

        const totalQty =
            holding.quantity +
            quantity;

        holding.avgPrice =
            totalCost /
            totalQty;

        holding.quantity =
            totalQty;

        await holding.save();
    }

    return order;
};
exports.sellStock = async (
    userId,
    data
) => {

    const {
        symbol,
        quantity,
        price
    } = data;

    const upperSymbol = symbol.toUpperCase();

    const holding =
        await Holding.findOne({
            userId,
            symbol: upperSymbol
        });

    if (!holding) {
        throw new AppError(
            "Stock not found in holdings",
            400
        );
    }

    if (
        holding.quantity <
        quantity
    ) {
        throw new AppError(
            "Insufficient shares",
            400
        );
    }

    holding.quantity -= quantity;

    if (
        holding.quantity === 0
    ) {
        await Holding.deleteOne({
            _id: holding._id
        });
    } else {
        await holding.save();
    }

    const order =
        await Order.create({
            userId,
            symbol: upperSymbol,
            quantity,
            price,
            type: "SELL"
        });

    return order;
};

exports.getHistory = async (
    userId
) => {

    return await Order.find({
        userId
    }).sort({
        createdAt: -1
    });
};
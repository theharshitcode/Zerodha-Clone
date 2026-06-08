const Holding = require("../models/HoldingModel");

const Stock = require("../models/StockModel");

exports.getPortfolio = async (userId) => {
    const holdings =
        await Holding.find({ userId });

    const symbols = holdings.map(h => h.symbol);
    const stocks = await Stock.find({ symbol: { $in: symbols } });

    const stockPriceMap = stocks.reduce((acc, stock) => {
        acc[stock.symbol] = stock.currentPrice;
        return acc;
    }, {});

    let investedValue = 0;
    let currentValue = 0;

    for (const holding of holdings) {
        investedValue += holding.quantity * holding.avgPrice;
        const livePrice = stockPriceMap[holding.symbol] || holding.avgPrice;
        currentValue += holding.quantity * livePrice;
    }

    const profitLoss = currentValue - investedValue;

    const profitLossPercentage = investedValue === 0 ? 0 : (profitLoss / investedValue) * 100;

    return {
        investedValue,
        currentValue,
        profitLoss,
        profitLossPercentage
    };
};
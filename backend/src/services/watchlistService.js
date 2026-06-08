const Watchlist = require("../models/WatchlistModel");

const validateSymbol = require("../utils/validateSymbol");

const AppError = require("../utils/AppError");

exports.addStock =
    async (userId, symbol) => {

        const exists =
            await Watchlist.findOne({
                userId,
                symbol
            });

        if (exists) {
            throw new AppError(
                "Stock already in watchlist",
                400
            );
        }

        const stock = await validateSymbol(symbol);

        if (!stock) {
            throw new AppError(
                "Invalid stock symbol",
                400
            );
        }

        return await Watchlist.create({
            userId,
            symbol: symbol.toUpperCase()
        });
    };

exports.getWatchlist =
    async (userId) => {

        return await Watchlist.find({
            userId
        });
    };

exports.removeStock =
    async (
        userId,
        symbol
    ) => {

        return await Watchlist.findOneAndDelete({
            userId,
            symbol: symbol.toUpperCase()
        });
    };
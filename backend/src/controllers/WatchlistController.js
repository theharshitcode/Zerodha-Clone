const asyncHandler =
require("../middlewares/asyncHandler");

const watchlistService =
require("../services/watchlistService");

exports.addStock =
asyncHandler(async (req, res) => {

    const item =
        await watchlistService
            .addStock(
                req.user.userId,
                req.body.symbol
            );

    res.status(201).json({
        success: true,
        item
    });
});

exports.getWatchlist =
asyncHandler(async (req, res) => {

    const watchlist =
        await watchlistService
            .getWatchlist(
                req.user.userId
            );

    res.status(200).json({
        success: true,
        count:
            watchlist.length,
        watchlist
    });
});

exports.removeStock =
asyncHandler(async (req, res) => {

    await watchlistService
        .removeStock(
            req.user.userId,
            req.params.symbol
        );

    res.status(200).json({
        success: true,
        message:
            "Removed from watchlist"
    });
});
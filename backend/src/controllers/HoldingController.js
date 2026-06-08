const asyncHandler =
require("../middlewares/asyncHandler");

const holdingService =
require("../services/holdingService");

exports.getHoldings =
asyncHandler(async (req, res) => {

    const holdings =
        await holdingService.getHoldings(
            req.user.userId
        );

    res.status(200).json({
        success: true,
        count: holdings.length,
        holdings
    });
});

exports.getHoldingBySymbol =
asyncHandler(async (req, res) => {

    const holding =
        await holdingService.getHoldingBySymbol(
            req.user.userId,
            req.params.symbol.toUpperCase()
        );

    res.status(200).json({
        success: true,
        holding
    });
});
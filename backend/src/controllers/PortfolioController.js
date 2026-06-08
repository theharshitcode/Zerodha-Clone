const asyncHandler =
require("../middlewares/asyncHandler");

const portfolioService =
require("../services/portfolioService");

exports.getPortfolio =
asyncHandler(async (req, res) => {

    const portfolio =
        await portfolioService
            .getPortfolio(
                req.user.userId
            );

    res.status(200).json({
        success: true,
        portfolio
    });
});
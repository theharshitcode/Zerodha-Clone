const asyncHandler =
require("../middlewares/asyncHandler");

const dashboardService =
require("../services/dashboardService");

exports.getDashboard =
asyncHandler(async (req, res) => {

    const dashboard =
        await dashboardService
            .getDashboard(
                req.user.userId
            );

    res.status(200).json({
        success: true,
        dashboard
    });
});
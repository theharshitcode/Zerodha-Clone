const express =
    require("express");

const {
    getPortfolio
} = require(
    "../controllers/PortfolioController"
);

const authMiddleware =
    require("../middlewares/authMiddleware");

const router =
    express.Router();

/**
 * @swagger
 * /portfolio:
 *   get:
 *     summary: Get portfolio details
 *     tags: [Portfolio]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Portfolio details retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get(
    "/",
    authMiddleware,
    getPortfolio
);

module.exports = router;
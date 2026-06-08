const express =
    require("express");

const {
    getHoldings,
    getHoldingBySymbol
} = require(
    "../controllers/HoldingController"
);

const authMiddleware =
    require("../middlewares/authMiddleware");

const router =
    express.Router();

/**
* @swagger
* /holdings:
*   get:
*     summary: Get all holdings for the authenticated user
*     tags: [Holdings]
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: Holdings fetched successfully
*       401:
*         description: Unauthorized
*       500:
*         description: Internal server error
*/

router.get(
    "/",
    authMiddleware,
    getHoldings
);

/**
* @swagger
* /holdings/{symbol}:
*   get:
*     summary: Get holding details for a specific stock symbol
*     tags: [Holdings]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: symbol
*         required: true
*         schema:
*           type: string
*         description: Stock symbol to fetch holding details for
*     responses:
*       200:
*         description: Holding details fetched successfully
*       401:
*         description: Unauthorized
*       404:
*         description: Holding not found for the given symbol
*       500:
*         description: Internal server error
*/

router.get(
    "/:symbol",
    authMiddleware,
    getHoldingBySymbol
);

module.exports = router;
const express = require("express");

const { addStock, getWatchlist, removeStock } = require("../controllers/WatchlistController");

const { addStockSchema } = require("../validators/watchlistValidator");

const authMiddleware = require("../middlewares/authMiddleWare");

const validate = require("../middlewares/validate");

const router = express.Router();


/**
 * @swagger
 * /watchlist:
 *   post: 
 *     summary: Add stock to watchlist
 *     tags: [Watchlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddStockRequest'
 *     responses:
 *       200:
 *         description: Stock added to watchlist successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post(
    "/",
    authMiddleware, validate(
        addStockSchema
    ),
    addStock
);

/**
 * @swagger
 * /watchlist:
 *   get: 
 *     summary: Get watchlist
 *     tags: [Watchlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Watchlist retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get(
    "/",
    authMiddleware,
    getWatchlist
);

/**
 * @swagger
 * /watchlist/{symbol}:
 *   delete: 
 *     summary: Remove stock from watchlist
 *     tags: [Watchlist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: symbol
 *         schema:
 *           type: string
 *         required: true
 *         description: Stock symbol
 *     responses:
 *       200:
 *         description: Stock removed from watchlist successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.delete(
    "/:symbol",
    authMiddleware,
    removeStock
);

module.exports = router;
const express = require("express");

const {
    getAllStocks,
    getStockBySymbol,
    searchStocks
} = require("../controllers/StockController");

const validate =
    require("../middlewares/validate");

const stockValidator = require("../validators/stockValidator");

const router = express.Router();

/**
 * @swagger
 * /stocks:
 *   get:
 *     summary: Get all stocks
 *     tags: [Stocks]
 *     responses:
 *       200:
 *         description: List of all stocks retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllStocks);

/**
 * @swagger
 * /stocks/search:
 *   get: 
 *     summary: Search stocks
 *     tags: [Stocks]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query
 *     responses:
 *       200:
 *         description: Search results retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.get("/search", validate(stockValidator.searchStockSchema, "query"), searchStocks);

/**
 * @swagger
 * /stocks/{symbol}:
 *   get: 
 *     summary: Get stock by symbol
 *     tags: [Stocks]
 *     parameters:
 *       - in: path
 *         name: symbol
 *         schema:
 *           type: string
 *         required: true
 *         description: Stock symbol
 *     responses:
 *       200:
 *         description: Stock details retrieved successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Stock not found
 *       500:
 *         description: Internal server error
 */
router.get("/:symbol", validate(stockValidator.stockSymbolSchema, "params"), getStockBySymbol);

module.exports = router;
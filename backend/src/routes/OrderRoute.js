const express = require("express");

const {

    buyStock,
    sellStock,
    getTransactionHistory
} = require("../controllers/OrderController");

const authMiddleware = require("../middlewares/authMiddleWare");

const validate = require("../middlewares/validate");

const {
    buyStockSchema,
    sellStockSchema
} = require("../validators/orderValidator");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management APIs
 * */

/**
 * @swagger
 * /orders/buy:
 *   post: 
 *     summary: Buy stocks
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BuyStockRequest'
 *     responses:
 *       200:
 *         description: Stock bought successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/buy", authMiddleware, validate(buyStockSchema), buyStock);

/**
 * @swagger
 * /orders/sell:
 *   post: 
 *     summary: Sell stocks
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SellStockRequest'
 *     responses:
 *       200:
 *         description: Stock sold successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/sell", authMiddleware, validate(sellStockSchema), sellStock);

/**
 * @swagger
 * /orders/history:
 *   get: 
 *     summary: Get transaction history
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Transaction history retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.get("/history", authMiddleware, getTransactionHistory);

module.exports = router;
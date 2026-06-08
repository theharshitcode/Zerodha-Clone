const express =
    require("express");

const {
    getDashboard
} = require(
    "../controllers/DashboardController"
);

const authMiddleware =
    require("../middlewares/authMiddleware");

const router =
    express.Router();

/**
* @swagger
* /dashboard:
*   get:
*     summary: Get dashboard data
*     tags: [Dashboard]
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: Dashboard data fetched successfully
*/
router.get(
    "/",
    authMiddleware,
    getDashboard
);

module.exports = router;
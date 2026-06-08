const express = require('express');
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const passport = require("passport");
const cookieParser = require("cookie-parser");

require("./config/passport");

// Middleware to parse JSON
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());

const authRoutes = require("./routes/AuthRoute");
const errorMiddleware = require("./middlewares/errorMiddleware");
const AppError = require("./utils/AppError");
const stockRoutes = require("./routes/StockRoute");
const holdingRoutes = require("./routes/HoldingRoute");
const orderRoutes = require("./routes/OrderRoute");
const portfolioRoutes = require("./routes/PortfolioRoute");
const watchlistRoutes = require("./routes/WatchlistRoute");
const dashboardRoutes = require("./routes/DashboardRoute");

// Swagger Documentation
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

// Export app for server.js or testing suites
app.use("/auth", authRoutes);
app.use("/stocks", stockRoutes);
app.use("/holdings", holdingRoutes);
app.use("/orders", orderRoutes);
app.use("/portfolio", portfolioRoutes);
app.use("/watchlist", watchlistRoutes);
app.use("/dashboard", dashboardRoutes);

app.use((req, res, next) => {
    next(new AppError("Route not found", 404));
});

app.use(errorMiddleware);
module.exports = app;
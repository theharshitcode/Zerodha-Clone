const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi =require("swagger-ui-express");
const passport =
require("passport");

require("./config/passport");


const swaggerSpec =require("./config/swagger");

app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
    passport.initialize()
);

const authRoutes = require("./routes/AuthRoute");
const errorMiddleware = require("./middlewares/errorMiddleware");
const AppError = require("./utils/AppError");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/auth", authRoutes);

app.use((req, res, next) => {
    next(new AppError("Route not found", 404));
});

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
); 

app.use(errorMiddleware);

module.exports = app;
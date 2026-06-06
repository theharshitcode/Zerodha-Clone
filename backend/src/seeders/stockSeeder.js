const mongoose = require("mongoose");
const Stock = require("../models/StockModel");
const stocks = require("../data/stocks");

require("dotenv").config();

const seedStocks = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        await Stock.deleteMany();

        await Stock.insertMany(stocks);

        console.log("Stocks seeded successfully");

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedStocks();
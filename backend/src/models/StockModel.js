const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        unique: true,
        required: true
    },

    companyName: {
        type: String,
        required: true
    },

    currentPrice: {
        type: Number,
        required: true
    },

    sector: String,

    exchange: {
        type: String,
        default: "NSE"
    }
});


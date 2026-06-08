const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
            required: true,
            unique: true,
            uppercase: true
        },

        companyName: {
            type: String,
            required: true
        },

        currentPrice: {
            type: Number,
            required: true
        },

        sector: {
            type: String
        },

        exchange: {
            type: String,
            default: "NSE"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Stock",
    stockSchema
);
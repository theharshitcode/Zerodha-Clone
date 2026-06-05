const mongoose = require("mongoose");

const PositionModel = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    avg: { type: Number, required: true },
    quantity: { type: Number, required: true },
    net: { type: String, required: true },
    isLoss: { type: Boolean, required: true },
    date: { type: Date, default: Date.now }
});

const Position = mongoose.model("Position", PositionModel);

module.exports = Position;
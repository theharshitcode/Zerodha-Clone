const mongoose = require("mongoose");

const HoldingmodelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    avg: { type: Number, required: true },
    quantity: { type: Number, required: true },
    net: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Holdingmodel = mongoose.model("Holdingmodel", HoldingmodelSchema);

module.exports = Holdingmodel;
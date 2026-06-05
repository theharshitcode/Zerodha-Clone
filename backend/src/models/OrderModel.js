const mongoose = require("mongoose");

const OrderModel = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    mode: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", OrderModel);

module.exports = Order;
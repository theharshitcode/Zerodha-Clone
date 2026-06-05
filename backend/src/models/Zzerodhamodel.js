const mongoose = require("mongoose");

const ZzerodhamodelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    avg: { type: Number, required: true },
    quantity: { type: Number, required: true },
    net: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Zzerodhamodel = mongoose.model("Zzerodhamodel", ZzerodhamodelSchema);

module.exports = Zzerodhamodel;
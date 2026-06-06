const mongoose = require("mongoose");
const AuthSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: false
    },

    googleId: {
        type: String,
        default: null
    },

    provider: {
        type: String,
        enum: [
            "local",
            "google"
        ],
        default: "local"
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    refreshToken: {
        type: String,
        default: null
    }

}, {
    timestamps: true
});
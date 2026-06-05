const Auth = require("../models/AuthModel");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
    return { accessToken, refreshToken };
};

module.exports = generateToken;
const Auth = require("../models/AuthModel");
const tokenBlacklist = require("../models/BlackList");

const asyncHandler = require("../middlewares/asyncHandler");
const AppError = require("../utils/AppError");

const authService = require("../services/authService");

// Login
exports.Login = asyncHandler(async (req, res) => {

    const { email, password } =
        req.body;

    const result =
        await authService.login(
            email,
            password
        );

    res.cookie(
        "refreshToken",
        result.refreshToken,
        {
            httpOnly: true,
            secure:
                process.env.NODE_ENV ===
                "production",
            sameSite: "strict",
            maxAge:
                7 * 24 * 60 * 60 * 1000
        }
    );

    res.status(200).json({
        success: true,
        ...result
    });

});
// Register
exports.Register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    const result = await authService.register(
        username,
        email,
        password
    );

    res.status(201).json({
        success: true,
        ...result
    });
});

// Get Users
exports.GetUsers = asyncHandler(async (req, res) => {
    const users = await Auth.find()
        .select("-password -refreshToken");

    res.status(200).json({
        success: true,
        users
    });
});

// Logout
exports.Logout = asyncHandler(async (req, res) => {
    const token =
        req.headers.authorization?.split(" ")[1];

    res.clearCookie(
        "refreshToken"
    );

    await Auth.findByIdAndUpdate(
        req.user.id || req.user._id,
        {
            refreshToken: null
        }
    );

    await tokenBlacklist.create({
        token
    });

    res.status(200).json({
        success: true,
        message: "Logout successful"
    });
});

// Refresh Token
exports.RefreshToken = asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;

    const tokens = await authService.refreshTokens(refreshToken);

    res.status(200).json({
        success: true,
        ...tokens
    });
});
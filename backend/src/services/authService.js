const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Auth = require("../models/AuthModel");
const AppError = require("../utils/AppError");
const generateToken =
    require("../utils/generateTokens");

exports.login = async (
    email,
    password
) => {

    const user =
        await Auth.findOne({ email });

    if (!user) {
        throw new AppError(
            "User not found",
            404
        );
    }

    const isValid =
        await bcrypt.compare(
            password,
            user.password
        );

    if (!isValid) {
        throw new AppError(
            "Invalid credentials",
            401
        );
    }

    const tokens =
        generateToken(user);

    user.refreshToken = tokens.refreshToken;
    await user.save();

    return {
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        },
        ...tokens
    };
};

exports.register = async (
    username,
    email,
    password
) => {

    const existingUser =
        await Auth.findOne({ email });

    if (existingUser) {
        throw new AppError(
            "User already exists",
            400
        );
    }

    const hashedPassword =
        await bcrypt.hash(password, 10);

    const user =
        await Auth.create({
            username,
            email,
            password: hashedPassword
        });

    const tokens =
        generateToken(user);

    user.refreshToken = tokens.refreshToken;
    await user.save();

    return {
        message:
            "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        },
        ...tokens
    };
};

exports.refreshTokens = async (refreshToken) => {
    try {
        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        const user = await Auth.findById(decoded.userId);
        if (!user || user.refreshToken !== refreshToken) {
            throw new AppError("Invalid refresh token", 401);
        }

        const tokens = generateToken(user);
        user.refreshToken = tokens.refreshToken;
        await user.save();

        return tokens;
    } catch (error) {
        throw new AppError("Invalid or expired refresh token", 401);
    }
};
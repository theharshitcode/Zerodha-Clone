const express = require("express");
const passport = require("passport");

const {
    Login,
    Register,
    GetUsers,
    Logout,
    RefreshToken
} = require("../controllers/AuthController");

const generateToken = require("../utils/generateTokens");

const asyncHandler = require("../middlewares/asyncHandler");

const authMiddleware = require("../middlewares/authMiddleWare");

const validate = require("../middlewares/validate");

const authValidator = require("../validators/authValidator");

const loginLimiter = require("../middlewares/rateLimiter");

const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", loginLimiter, validate(authValidator.loginSchema), Login);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register user
 *     tags: [Authentication]
 *     responses:
 *       201:
 *         description: User registered
 */
router.post("/register", validate(authValidator.registerSchema), Register);

/**
 * @swagger
 * /auth/users:
 *   get:
 *     summary: Get all users
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Users fetched successfully
 */
router.get("/users", authMiddleware, GetUsers);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout user
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logout successful
 */
router.post("/logout", authMiddleware, Logout);

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Refresh access token
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Token refreshed
 */
router.post("/refresh-token", validate(authValidator.refreshTokenSchema), RefreshToken);

/**
 * @swagger
 * /auth/google:
 *   get:
 *     summary: Google OAuth Login
 *     tags: [Authentication]
 *     responses:
 *       302:
 *         description: Redirect to Google
 */
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Google OAuth Callback
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Google OAuth successful, returns user info and tokens
 *       401:
 *         description: Unauthorized, Google authentication failed
 *       500:
 *         description: Internal server error during Google OAuth callback
 */
router.get(
    "/google/callback",
    passport.authenticate(
        "google",
        {
            session: false
        }
    ),

    asyncHandler(
        async (req, res) => {

            const {
                accessToken,
                refreshToken
            } = generateToken(
                req.user
            );

            req.user.refreshToken =
                refreshToken;

            await req.user.save();

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            });

            res.status(200).json({
                success: true,

                user: {
                    id: req.user._id,
                    username:
                        req.user.username,
                    email:
                        req.user.email
                },

                accessToken,
                refreshToken
            });
        }
    )
);

module.exports = router;

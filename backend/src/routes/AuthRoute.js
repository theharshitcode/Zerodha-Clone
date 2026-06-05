const express = require("express");
const passport =
    require("passport");

const generateToken =
    require("../utils/generateTokens");

const {
    Login,
    Register,
    GetUsers,
    Logout,
    RefreshToken
} = require("../controllers/AuthController");

const asyncHandler =
    require("../middlewares/asyncHandler");

const authMiddleware =
    require("../middlewares/AuthMiddleWare");

const validate =
    require("../middlewares/validate");

const authValidator =
    require("../validators/authValidator");

const loginLimiter = require("../middlewares/rateLimiter");

const router = express.Router();

router.post(
    "/login",
    loginLimiter,
    validate(authValidator.loginSchema),
    Login
);

router.post(
    "/register",
    validate(authValidator.registerSchema),
    Register
);

router.get(
    "/users",
    authMiddleware,
    GetUsers
);

router.post(
    "/logout",
    authMiddleware,
    Logout
);

router.post(
    "/refresh-token",
    validate(authValidator.refreshTokenSchema),
    RefreshToken
);

router.get(
    "/google",

    passport.authenticate(
        "google",
        {
            scope: [
                "profile",
                "email"
            ]
        }
    )
);

router.get(
    "/google/callback",

    passport.authenticate(
        "google",
        {
            session: false
        }
    ),

    asyncHandler(async (req, res) => {

        const {
            accessToken,
            refreshToken
        } = generateToken(
            req.user
        );

        req.user.refreshToken =
            refreshToken;

        await req.user.save();

        res.status(200).json({
            success: true,

            user: {
                id:
                    req.user._id,

                username:
                    req.user.username,

                email:
                    req.user.email
            },

            accessToken,
            refreshToken
        });
    })
);

module.exports = router;
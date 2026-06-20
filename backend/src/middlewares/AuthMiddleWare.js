const jwt = require("jsonwebtoken");
const BlackList = require("../models/BlackList");

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Authorization token missing"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        // Check blacklist first
        const blacklistedToken = await BlackList.findOne({ token });

        if (blacklistedToken) {
            return res.status(401).json({
                message: "Token has been logged out"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        console.log(
            "DECODED:",
            decoded
        );
        req.user = decoded;

        next();

    } catch (error) {

        console.log(
            "JWT ERROR:",
            error.message
        );

        return res.status(401).json({
            message:
                "Invalid or expired token"
        });
    }
};

module.exports = authMiddleware;
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Zerodha Clone API",
            version: "1.0.0",
            description: "Trading API"
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ],
        tags: [
            { name: "Authentication", description: "User authentication and authorization" },
            { name: "Stocks", description: "Stock market data" },
            { name: "Orders", description: "Trading orders and history" },
            { name: "Holdings", description: "User stock holdings" },
            { name: "Portfolio", description: "User portfolio overview" },
            { name: "Watchlist", description: "User watchlists" },
            { name: "Dashboard", description: "User dashboard data" }
        ]
    },
    apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
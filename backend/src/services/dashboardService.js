const Holding =
    require("../models/HoldingModel");

const Watchlist =
    require("../models/WatchlistModel");

const Order =
    require("../models/OrderModel");

const portfolioService =
    require("./portfolioService");

exports.getDashboard =
    async (userId) => {

        const portfolio =
            await portfolioService
                .getPortfolio(userId);

        const holdings =
            await Holding.find({
                userId
            });

        const watchlist =
            await Watchlist.find({
                userId
            });

        const totalHoldings =
            holdings.length;

        const watchlistCount =
            watchlist.length;

        const recentOrders =
            await Order.find({
                userId
            })
                .sort({
                    createdAt: -1
                })
                .limit(5);


        return {
            portfolio,
            holdings,
            watchlist,
            totalHoldings,
            watchlistCount,
            recentOrders
        };
    };
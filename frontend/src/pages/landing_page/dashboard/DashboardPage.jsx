import { useState, useEffect } from "react";

import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Summary from "./components/summary/Summary";
import Watchlist from "./components/watchlist/Watchlist";
import StockDetails from "./components/stockDetails/StockDetails";
import Holdings from "./components/holdings/Holdings";
import Orders from "./components/orders/Orders";
import BuyModal from "./components/buyModal/BuyModal";
import PortfolioChart from "./components/PortfolioChart/PortfolioChart"
import { getHoldings } from "../../../services/holdingService";
import SellModal from "./components/sellModal/SellModal"
import PortfolioValueChart from "./components/charts/PortfolioValueChart"
import AssetAllocationChart from "./components/charts/AssetAllocationChart"
import HoldingsPerformanceChart from "./components/charts/HoldingsPerformanceChart";
import DayPnLChart from "./components/charts/DayPnLChart";
import TopGainers from "./components/market/TopGainers";
import TopLosers from "./components/market/TopLosers";
import MarketOverview from "./components/market/MarketOverview";
import StockChart from "./components/stockChart/StockChart";
import {getAllStocks} from "../../../services/stockService"

import "./DashboardPage.css";

const DashboardPage = () => {
    const [showSellModal, setShowSellModal] = useState(false);
    const [holdings, setHoldings] = useState([]);
    useEffect(() => {

        const loadData =
            async () => {

                const holdingsData =
                    await getHoldings();

                const stocksData =
                    await getAllStocks();

                const merged =
                    holdingsData.holdings.map(
                        holding => {

                            const stock =
                                stocksData.stocks.find(
                                    s =>
                                        s.symbol ===
                                        holding.symbol
                                );

                            return {

                                ...holding,

                                currentPrice:
                                    stock?.currentPrice ||
                                    holding.avgPrice

                            };

                        }
                    );

                setHoldings(
                    merged
                );

            };

        loadData();

    }, []);

    const [selectedStock, setSelectedStock] =
        useState(null);

    const [
        showBuyModal,
        setShowBuyModal
    ] = useState(false);

    return (
        <div className="dashboard">

            <Sidebar />

            <div className="dashboard-main">

                <Topbar />

                <Summary
                    holdings={holdings}
                />

                <MarketOverview />

                <div className="dashboard-content">

                    <Watchlist
                        setSelectedStock={setSelectedStock}
                    />

                    <div className="dashboard-right">

                        <StockDetails
                            stock={selectedStock}
                            setShowBuyModal={setShowBuyModal}
                            setShowSellModal={setShowSellModal}
                        />

                        <StockChart
                            stock={selectedStock}
                        />

                    </div>

                </div>

                <PortfolioValueChart
                    holdings={holdings}
                />

                <div className="chart-grid">

                    <AssetAllocationChart
                        holdings={holdings}
                    />

                    <DayPnLChart />

                </div>

                <div className="market-grid">

                    <TopGainers />

                    <TopLosers />

                </div>

                <Holdings
                    holdings={holdings}
                />

                <Orders />


                {/* BUY MODAL */}

                {
                    showBuyModal && (
                        <BuyModal
                            stock={selectedStock}
                            onClose={() =>
                                setShowBuyModal(false)
                            }
                        />
                    )
                }

                {
                    showSellModal && (

                        <SellModal
                            stock={selectedStock}
                            onClose={() =>
                                setShowSellModal(false)
                            }
                        />

                    )
                }
            </div >

        </div >
    );
};

export default DashboardPage;
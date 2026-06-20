import "./StockDetails.css";

const StockDetails = ({
    stock,
    setShowBuyModal,
    setShowSellModal
}) => {

    if (!stock) {

        return (
            <div className="stock-details">

                <h2>
                    Select a stock
                </h2>

            </div>
        );
    }

    return (
        <div className="stock-details">

            <h2>
                {stock.symbol}
            </h2>

            <p>
                {stock.companyName}
            </p>

            <h3>
                ₹{stock.currentPrice}
            </h3>

            <p>
                Sector:
                {" "}
                {stock.sector}
            </p>

            <p>
                Exchange:
                {" "}
                {stock.exchange}
            </p>

            <div className="actions">

                <button
                    className="buy-btn"
                    onClick={() =>
                        setShowBuyModal(true)
                    }
                >
                    BUY
                </button>

                <button
                    className="sell-btn"
                    onClick={() =>
                        setShowSellModal(true)
                    }
                >
                    SELL
                </button>

            </div>

        </div>
    );
};

export default StockDetails;
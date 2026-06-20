import { useState } from "react";
import { sellStock }
    from "../../../../../services/orderService";

import "./SellModal.css";

const SellModal = ({
    stock,
    onClose
}) => {

    const [quantity,
        setQuantity] =
        useState(1);

    const handleSell =
        async () => {

            try {

                const payload = {
                    symbol: stock.symbol,
                    quantity,
                    price:
                        stock.currentPrice
                };

                const response =
                    await sellStock(
                        payload
                    );

                alert(
                    response.message
                );

                window.location.reload();

            } catch (error) {

                alert(
                    error.response?.data?.message ||
                    "Sell failed"
                );

            }

        };

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>
                    Sell {stock.symbol}
                </h2>

                <p>
                    Current Price:
                    ₹{stock.currentPrice}
                </p>

                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                        setQuantity(
                            Number(
                                e.target.value
                            )
                        )
                    }
                />

                <div className="modal-actions">

                    <button
                        className="sell-btn"
                        onClick={handleSell}
                    >
                        Sell Stock
                    </button>

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                </div>

            </div>

        </div>

    );
};

export default SellModal;
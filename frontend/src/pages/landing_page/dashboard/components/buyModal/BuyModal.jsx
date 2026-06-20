import { useState } from "react";
import { buyStock }
  from "../../../../../services/orderService";

const BuyModal = ({
  stock,
  onClose
}) => {

  const [quantity,
    setQuantity] =
    useState(1);

  const [loading,
    setLoading] =
    useState(false);
  const handleBuy = async () => {
    console.log("BUY CLICKED");
    try {

      const payload = {
        symbol: stock.symbol,
        quantity,
        price: stock.currentPrice
      };

      console.log(payload);

      const response =
        await buyStock(payload);

      console.log(
        "BUY RESPONSE:",
        response
      );

      alert(response.message);

      onClose();

    } catch (error) {
      console.log(
        "BUY ERROR:",
        error.response?.data
      );

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Buy failed"
      );

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>
          Buy {stock.symbol}
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
              Number(e.target.value)
            )
          }
        />

        <div className="modal-actions">

          <button
            className="buy-btn"
            onClick={handleBuy}
          >
            Buy Stock
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

export default BuyModal;
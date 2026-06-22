import "./Summary.css";

const Summary = ({
  holdings
}) => {

  const totalInvestment =
    holdings.reduce(
      (sum, item) =>
        sum +
        (
          item.quantity *
          item.avgPrice
        ),
      0
    );

  const currentValue =
    holdings.reduce(
      (sum, item) =>
        sum +
        (
          item.quantity *
          (
            item.currentPrice ||
            item.avgPrice
          )
        ),
      0
    );

  const totalPnL =
    currentValue -
    totalInvestment;

  const pnlPercent =
    totalInvestment
      ? (
          (
            totalPnL /
            totalInvestment
          ) * 100
        ).toFixed(2)
      : 0;

  return (

    <div className="summary">

      <div className="card">

        <h4>
          Investment
        </h4>

        <h2>
          ₹{
            totalInvestment
              .toLocaleString()
          }
        </h2>

      </div>

      <div className="card">

        <h4>
          Current Value
        </h4>

        <h2>
          ₹{
            currentValue
              .toLocaleString()
          }
        </h2>

      </div>

      <div className="card">

        <h4>
          Total P&L
        </h4>

        <h2
          className={
            totalPnL >= 0
              ? "profit"
              : "loss"
          }
        >
          ₹{
            totalPnL
              .toLocaleString()
          }
        </h2>

      </div>

      <div className="card">

        <h4>
          Return %
        </h4>

        <h2
          className={
            pnlPercent >= 0
              ? "profit"
              : "loss"
          }
        >
          {pnlPercent}%
        </h2>

      </div>

    </div>

  );

};

export default Summary;
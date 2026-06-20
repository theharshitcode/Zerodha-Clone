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

  const totalQuantity =
    holdings.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

  return (

    <div className="summary">

      <div className="card">

        <h4>
          Total Investment
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
          Total Holdings
        </h4>

        <h2>
          {holdings.length}
        </h2>

      </div>

      <div className="card">

        <h4>
          Total Quantity
        </h4>

        <h2>
          {totalQuantity}
        </h2>

      </div>

    </div>

  );
};

export default Summary;
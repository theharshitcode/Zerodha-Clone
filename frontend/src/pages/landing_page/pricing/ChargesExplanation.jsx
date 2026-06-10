import "./PricingPage.css";

const ChargesExplanation = () => {
  return (
    <section className="charges-explanation">

      <h2>Charges Explained</h2>

      <div className="explanation-grid">

        <div className="explanation-card">
          <h3>STT / CTT</h3>

          <p>
            Tax charged by the government
            on stock market transactions.
          </p>
        </div>

        <div className="explanation-card">
          <h3>Transaction Charges</h3>

          <p>
            Charges levied by exchanges
            like NSE and BSE.
          </p>
        </div>

        <div className="explanation-card">
          <h3>GST</h3>

          <p>
            18% GST on brokerage and
            exchange related charges.
          </p>
        </div>

        <div className="explanation-card">
          <h3>DP Charges</h3>

          <p>
            Depository participant charges
            applicable when selling shares.
          </p>
        </div>

        <div className="explanation-card">
          <h3>AMC</h3>

          <p>
            Annual maintenance charges
            for demat accounts.
          </p>
        </div>

        <div className="explanation-card">
          <h3>Call & Trade</h3>

          <p>
            Extra charges for placing
            orders through dealers.
          </p>
        </div>

      </div>

    </section>
  );
};

export default ChargesExplanation;
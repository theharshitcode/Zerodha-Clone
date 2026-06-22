import "./PricingPage.css";

const ChargesCards = () => {
  return (
    <section className="charges-cards">

      <div className="charge-card">
        <h2>₹0</h2>

        <h3>Free equity delivery</h3>

        <p>
          All equity delivery investments
          (NSE & BSE) are absolutely free.
        </p>
      </div>

      <div className="charge-card">
        <h2>₹20</h2>

        <h3>Intraday & F&O trades</h3>

        <p>
          Flat ₹20 or 0.03% per executed
          order, whichever is lower.
        </p>
      </div>

      <div className="charge-card">
        <h2>₹0</h2>

        <h3>Free direct mutual funds</h3>

        <p>
          Zero commission and zero
          DP charges on direct mutual funds.
        </p>
      </div>

    </section>
  );
};

export default ChargesCards;
const Pricing = () => {
  return (
    <section className="pricing">

      <div className="pricing-left">
        <h2>Unbeatable pricing</h2>

        <p>
          We pioneered the concept of discount broking and
          price transparency in India. Flat fees and no
          hidden charges.
        </p>

        <a href="/pricing">
          See pricing →
        </a>
      </div>

      <div className="pricing-right">

        <div className="pricing-box">
          <h3>₹0</h3>
          <p>Free account opening</p>
        </div>

        <div className="pricing-box">
          <h3>₹0</h3>
          <p>
            Free equity delivery and
            direct mutual funds
          </p>
        </div>

        <div className="pricing-box">
          <h3>₹20</h3>
          <p>Intraday and F&O</p>
        </div>

      </div>

    </section>
  );
};

export default Pricing;
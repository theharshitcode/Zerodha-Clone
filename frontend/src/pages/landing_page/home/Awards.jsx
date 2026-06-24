
const Awards = () => {
  return (
    <section className="awards">

      <div className="awards-left">
        <img
          src="/media/image/largestBroker.svg"
          alt="Largest Stock Broker"
        />
      </div>

      <div className="awards-right">

        <h2>Largest stock broker in India</h2>

        <p>
          2+ million Zerodha clients contribute to over 15% of all
          retail order volumes in India daily by trading and investing in:
        </p>

        <div className="awards-lists">

          <ul>
            <li>Futures and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </ul>

          <ul>
            <li>Stocks & IPOs</li>
            <li>Direct mutual funds</li>
            <li>Bonds and Govt. Securities</li>
          </ul>

        </div>

      </div>

    </section>
  );
};

export default Awards;
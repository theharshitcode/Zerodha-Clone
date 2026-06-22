import "./MarketCards.css";

const TopLosers = () => {

  const losers = [
    {
      symbol: "WIPRO",
      change: "-2.1%"
    },
    {
      symbol: "SBIN",
      change: "-1.8%"
    },
    {
      symbol: "NTPC",
      change: "-1.5%"
    },
    {
      symbol: "POWERGRID",
      change: "-1.1%"
    }
  ];

  return (

    <div className="market-card">

      <h2>
        Top Losers
      </h2>

      {
        losers.map(
          stock => (

          <div
            key={stock.symbol}
            className="market-item"
          >

            <span>
              {stock.symbol}
            </span>

            <span
              className="red"
            >
              {stock.change}
            </span>

          </div>

        ))
      }

    </div>

  );
};

export default TopLosers;
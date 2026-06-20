import "./MarketCards.css";

const TopGainers = () => {

  const gainers = [
    {
      symbol: "TCS",
      change: "+4.5%"
    },
    {
      symbol: "INFY",
      change: "+3.2%"
    },
    {
      symbol: "AXISBANK",
      change: "+2.8%"
    },
    {
      symbol: "TITAN",
      change: "+2.1%"
    }
  ];

  return (

    <div className="market-card">

      <h2>
        Top Gainers
      </h2>

      {
        gainers.map(
          stock => (

          <div
            key={stock.symbol}
            className="market-item"
          >

            <span>
              {stock.symbol}
            </span>

            <span
              className="green"
            >
              {stock.change}
            </span>

          </div>

        ))
      }

    </div>

  );
};

export default TopGainers;
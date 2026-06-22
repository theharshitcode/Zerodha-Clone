import "./MarketOverview.css";

const MarketOverview = () => {

  const indices = [
    {
      name: "NIFTY 50",
      value: "25,112",
      change: "+1.25%"
    },
    {
      name: "BANK NIFTY",
      value: "56,420",
      change: "+0.92%"
    },
    {
      name: "SENSEX",
      value: "82,450",
      change: "+1.11%"
    },
    {
      name: "INDIA VIX",
      value: "12.34",
      change: "-0.85%"
    }
  ];

  return (

    <div className="market-overview">

      {
        indices.map(index => (

          <div
            key={index.name}
            className="index-card"
          >

            <h4>
              {index.name}
            </h4>

            <h2>
              {index.value}
            </h2>

            <p
              className={
                index.change.startsWith("-")
                  ? "negative"
                  : "positive"
              }
            >
              {index.change}
            </p>

          </div>

        ))
      }

    </div>

  );
};

export default MarketOverview;
import { useEffect, useState } from "react";

import { getHoldings }
from "../../../../../../services/holdingService";

import "./FundsPage.css";

const FundsPage = () => {

  const [holdings,
    setHoldings] =
    useState([]);

  const totalFunds =
    100000;

  useEffect(() => {

    const loadData =
      async () => {

        const data =
          await getHoldings();

        setHoldings(
          data.holdings
        );

      };

    loadData();

  }, []);

  const investedAmount =
    holdings.reduce(
      (sum, item) =>
        sum +
        item.quantity *
        item.avgPrice,
      0
    );

  const availableCash =
    totalFunds -
    investedAmount;

  return (

    <div className="funds-page">

      <h2>
        Funds
      </h2>

      <div className="funds-grid">

        <div className="fund-card">

          <h4>
            Total Balance
          </h4>

          <h2>
            ₹{
              totalFunds
                .toLocaleString()
            }
          </h2>

        </div>

        <div className="fund-card">

          <h4>
            Invested
          </h4>

          <h2>
            ₹{
              investedAmount
                .toLocaleString()
            }
          </h2>

        </div>

        <div className="fund-card">

          <h4>
            Available Cash
          </h4>

          <h2>
            ₹{
              availableCash
                .toLocaleString()
            }
          </h2>

        </div>

      </div>

    </div>

  );

};

export default FundsPage;
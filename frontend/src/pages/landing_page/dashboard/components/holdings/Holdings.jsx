import { useEffect, useState }
  from "react";

import {
  getHoldings
}
  from "../../../../../services/holdingService";

import "./Holdings.css";

const Holdings = () => {

  const [holdings,
    setHoldings] =
    useState([]);

  useEffect(() => {

    const fetchHoldings =
      async () => {

        try {

          const data =
            await getHoldings();

          setHoldings(
            data.holdings
          );

        } catch (error) {

          console.error(error);

        }

      };

    fetchHoldings();

  }, []);

  return (

    <div className="holdings">

      <h2>
        Holdings
      </h2>

      <table>

        <thead>

          <tr>

            <th>Symbol</th>

            <th>Qty</th>

            <th>Avg Price</th>

            <th>Investment</th>

          </tr>

        </thead>

        <tbody>

          {
            holdings.map(
              holding => (

                <tr
                  key={holding._id}
                >

                  <td>
                    {holding.symbol}
                  </td>

                  <td>
                    {holding.quantity}
                  </td>

                  <td>
                    ₹{
                      (
                        holding.quantity *
                        holding.avgPrice
                      ).toLocaleString()
                    }
                  </td>

                  <td>
                    ₹
                    {
                      holding.quantity *
                      holding.avgPrice
                    }
                  </td>

                </tr>

              ))
          }

        </tbody>

      </table>

    </div>

  );
};

export default Holdings;
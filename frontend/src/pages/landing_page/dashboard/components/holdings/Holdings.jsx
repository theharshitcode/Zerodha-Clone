import "./Holdings.css";

const Holdings = ({
  holdings
}) => {

  return (

    <div className="holdings">

      <h3>
        Holdings
      </h3>

      <table>

        <thead>

          <tr>

            <th>
              Symbol
            </th>

            <th>
              Qty
            </th>

            <th>
              Avg Price
            </th>

            <th>
              Current
            </th>

            <th>
              Invested
            </th>

            <th>
              Value
            </th>

            <th>
              P&L
            </th>

          </tr>

        </thead>

        <tbody>

          {
            holdings.map(
              holding => {

                const invested =
                  holding.quantity *
                  holding.avgPrice;

                const currentPrice =
                  holding.currentPrice ||
                  holding.avgPrice;

                const currentValue =
                  holding.quantity *
                  currentPrice;

                const pnl =
                  currentValue -
                  invested;

                return (

                  <tr
                    key={
                      holding._id
                    }
                  >

                    <td>
                      {
                        holding.symbol
                      }
                    </td>

                    <td>
                      {
                        holding.quantity
                      }
                    </td>

                    <td>
                      ₹{
                        holding.avgPrice
                      }
                    </td>

                    <td>
                      ₹{
                        currentPrice
                      }
                    </td>

                    <td>
                      ₹{
                        invested.toFixed(
                          0
                        )
                      }
                    </td>

                    <td>
                      ₹{
                        currentValue.toFixed(
                          0
                        )
                      }
                    </td>

                    <td
                      className={
                        pnl >= 0
                          ? "profit"
                          : "loss"
                      }
                    >

                      ₹{
                        pnl.toFixed(
                          0
                        )
                      }

                    </td>

                  </tr>

                );

              }
            )
          }

        </tbody>

      </table>

    </div>

  );

};

export default Holdings;
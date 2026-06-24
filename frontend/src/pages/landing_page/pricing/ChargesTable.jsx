
const ChargesTable = () => {
  return (
    <section className="charges-table">

      <h2>Brokerage Charges</h2>

      <table>

        <thead>
          <tr>
            <th>Charge Type</th>
            <th>Equity Delivery</th>
            <th>Intraday</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Brokerage</td>
            <td>₹0</td>
            <td>0.03% or ₹20</td>
          </tr>

          <tr>
            <td>STT/CTT</td>
            <td>0.1%</td>
            <td>0.025%</td>
          </tr>

          <tr>
            <td>Transaction Charges</td>
            <td>0.00345%</td>
            <td>0.00345%</td>
          </tr>

          <tr>
            <td>GST</td>
            <td>18%</td>
            <td>18%</td>
          </tr>

          <tr>
            <td>SEBI Charges</td>
            <td>₹10 / Crore</td>
            <td>₹10 / Crore</td>
          </tr>

          <tr>
            <td>Stamp Charges</td>
            <td>0.015%</td>
            <td>0.003%</td>
          </tr>

        </tbody>

      </table>

    </section>
  );
};

export default ChargesTable;
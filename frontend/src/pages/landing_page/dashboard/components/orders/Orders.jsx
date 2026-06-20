import { useEffect, useState } from "react";
import { getHistory }
from "../../../../../services/orderService";

import "./Orders.css";

const Orders = () => {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    const fetchOrders =
      async () => {

        try {

          const data =
            await getHistory();

          setOrders(
            data.orders
          );

        } catch (error) {

          console.error(error);

        }

      };

    fetchOrders();

  }, []);

  return (

    <div className="orders">

      <h2>
        Order History
      </h2>

      <table>

        <thead>

          <tr>

            <th>Symbol</th>

            <th>Type</th>

            <th>Quantity</th>

            <th>Price</th>

            <th>Date</th>

          </tr>

        </thead>

        <tbody>

          {
            orders.map(order => (

              <tr
                key={order._id}
              >

                <td>
                  {order.symbol}
                </td>

                <td
                  className={
                    order.type === "BUY"
                      ? "buy"
                      : "sell"
                  }
                >
                  {order.type}
                </td>

                <td>
                  {order.quantity}
                </td>

                <td>
                  ₹{order.price}
                </td>

                <td>
                  {
                    new Date(
                      order.createdAt
                    ).toLocaleDateString()
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

export default Orders;
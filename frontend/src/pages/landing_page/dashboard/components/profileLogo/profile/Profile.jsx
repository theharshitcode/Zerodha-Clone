import { useEffect, useState } from "react";

import { getHoldings }
  from "../../../../../../services/holdingService";

import "./Profile.css";

const ProfilePage = () => {

  const [holdings,
    setHoldings] =
    useState([]);

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

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

  const totalInvestment =
    holdings.reduce(
      (sum, item) =>
        sum +
        item.quantity *
        item.avgPrice,
      0
    );

  const totalQuantity =
    holdings.reduce(
      (sum, item) =>
        sum +
        item.quantity,
      0
    );

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="avatar">

          {
            user?.username
              ?.charAt(0)
              ?.toUpperCase()
          }

        </div>

        <h2>
          {user?.username}
        </h2>

        <p>
          {user?.email}
        </p>

      </div>

      <div className="stats-grid">

        <div className="stat-card">

          <h4>
            Holdings
          </h4>

          <h2>
            {holdings.length}
          </h2>

        </div>

        <div className="stat-card">

          <h4>
            Quantity
          </h4>

          <h2>
            {totalQuantity}
          </h2>

        </div>

        <div className="stat-card">

          <h4>
            Investment
          </h4>

          <h2>
            ₹{
              totalInvestment
                .toLocaleString()
            }
          </h2>

        </div>

      </div>

    </div>

  );

};

export default ProfilePage;
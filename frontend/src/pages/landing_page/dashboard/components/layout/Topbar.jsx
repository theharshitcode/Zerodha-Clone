import { useEffect, useState } from "react";

import {
  useNavigate
}
  from "react-router-dom";

import "./Topbar.css";

const Topbar = () => {

  const navigate =
    useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const handleLogout =
    () => {

      localStorage.clear();

      navigate("/login");

    };

  const [showMenu, setShowMenu] = useState(false);

  return (

    <div className="topbar">

      <h2>Dashboard</h2>

      <div className="topbar-right">

        <div
          className="profile"
          onClick={() =>
            setShowMenu(!showMenu)
          }
        >
          H
        </div>

      </div>

      {showMenu && (

        <div className="profile-menu">

          <button
            onClick={() =>
              navigate("/profile")
            }
          >
            My Profile
          </button>

          <button
            onClick={() =>
              navigate("/funds")
            }
          >
            Funds
          </button>

          <button>
            Settings
          </button>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      )}

    </div>

  );
};

export default Topbar;
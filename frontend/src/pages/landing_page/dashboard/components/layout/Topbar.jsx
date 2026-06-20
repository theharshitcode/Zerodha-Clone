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

  return (

    <header
      className="topbar"
    >

      <h2>
        Dashboard
      </h2>

      <div
        className="topbar-right"
      >

        <div
          className="profile"
        >

          {
            user?.username
              ?.charAt(0)
              .toUpperCase()
          }

        </div>

        <button
          className="logout-btn"
          onClick={
            handleLogout
          }
        >

          Logout

        </button>

      </div>

    </header>

  );
};

export default Topbar;
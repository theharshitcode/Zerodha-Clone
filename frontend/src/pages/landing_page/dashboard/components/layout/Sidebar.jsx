import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import {
  FaChartLine,
  FaWallet,
  FaUser
} from "react-icons/fa";

const Sidebar = () => {

  return (

    <aside className="sidebar">

      <img
        src="/media/image/logo.svg"
        alt="Zerodha"
        className="sidebar-logo"
      />

      <ul>

        <li>
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/holdings">
            Holdings
          </NavLink>
        </li>

        <li>
          <NavLink to="/positions">
            Positions
          </NavLink>
        </li>

        <li>
          <NavLink to="/funds">
            Funds
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile">
            Profile
          </NavLink>
        </li>

      </ul>

    </aside>

  );

};

export default Sidebar;
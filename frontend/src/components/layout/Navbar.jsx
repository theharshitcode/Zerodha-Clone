import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">

          <Link to="/"><img className="logo" src="/media/image/logo.svg" alt="" /></Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/signup">Signup</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/pricing">Pricing</Link>
          </li>

          <li>
            <Link to="/support">Support</Link>
          </li>

          <li>
            <FiMenu size={22} />
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
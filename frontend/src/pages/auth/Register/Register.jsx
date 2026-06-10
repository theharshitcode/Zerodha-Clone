import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <section className="register-page">

      <div className="register-card">

        <img
          src="/media/image/logo.svg"
          alt="Zerodha"
          className="register-logo"
        />

        <h1>Open a Zerodha Account</h1>

        <p>
          Start investing and trading with ease.
        </p>

        <form>

          <div className="form-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <button
            type="submit"
            className="register-btn"
          >
            Create Account
          </button>

          <button
            type="button"
            className="google-btn"
          >
            Continue with Google
          </button>

        </form>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </section>
  );
};

export default Register;
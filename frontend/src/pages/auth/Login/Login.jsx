import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { loginUser } from "../../../services/authService";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuth();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response =
        await loginUser(
          formData
        );

      console.log("LOGIN RESPONSE:", response);

      // alert(
      //   JSON.stringify(
      //     response,
      //     null,
      //     2
      //   )
      // );
      // JWT store

      login(response.token);
      login(response.accessToken);

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <section className="login-page">

      <div className="login-card">

        <img
          src="/media/image/logo.svg"
          alt="Zerodha"
          className="login-logo"
        />

        <h1>Login to Zerodha</h1>

        <form
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            {
              loading
                ? "Logging in..."
                : "Login"
            }
          </button>

        </form>

        <p className="signup-link">

          Don't have an account?

          <Link to="/signup">
            Signup
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Login;
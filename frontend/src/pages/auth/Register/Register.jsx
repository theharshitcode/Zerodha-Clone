import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/authService";
import "./Register.css";

const Register = () => {

const navigate = useNavigate();

const [formData, setFormData] = useState({
username: "",
email: "",
password: "",
confirmPassword: "",
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

if (
  formData.password !==
  formData.confirmPassword
) {
  alert(
    "Passwords do not match"
  );
  return;
}

try {

  setLoading(true);

  const payload = {
    username:
      formData.username,
    email:
      formData.email,
    password:
      formData.password,
  };

  const response =
    await registerUser(
      payload
    );

  console.log(response);

  alert(
    "Registration Successful"
  );

  navigate("/login");

} catch (error) {

  console.log("FULL ERROR:", error);

  console.log(
    "BACKEND RESPONSE:",
    error.response?.data
  );

  alert(
    JSON.stringify(
      error.response?.data
    )
  );
}

};

return ( <section className="register-page">
  <div className="register-card">

    <img
      src="/media/image/logo.svg"
      alt="Zerodha"
      className="register-logo"
    />

    <h1>
      Open a Zerodha Account
    </h1>

    <p>
      Start investing and trading
      with ease.
    </p>

    <form
      onSubmit={handleSubmit}
    >

      <div className="form-group">
        <label>
          Username
        </label>

        <input
          type="text"
          name="username"
          value={
            formData.username
          }
          onChange={
            handleChange
          }
          placeholder="Enter username"
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={
            formData.email
          }
          onChange={
            handleChange
          }
          placeholder="Enter email"
          required
        />
      </div>

      <div className="form-group">
        <label>
          Password
        </label>

        <input
          type="password"
          name="password"
          value={
            formData.password
          }
          onChange={
            handleChange
          }
          placeholder="Enter password"
          required
        />
      </div>

      <div className="form-group">
        <label>
          Confirm Password
        </label>

        <input
          type="password"
          name="confirmPassword"
          value={
            formData.confirmPassword
          }
          onChange={
            handleChange
          }
          placeholder="Confirm password"
          required
        />
      </div>

      <button
        type="submit"
        className="register-btn"
      >
        {loading
          ? "Creating..."
          : "Create Account"}
      </button>

    </form>

    <p className="login-link">
      Already have an account?

      <Link to="/login">
        Login
      </Link>
    </p>

  </div>

</section>

);
};

export default Register;

import "./Login.css";

const LoginPage = () => {
  return (
    <section className="login-page">

      <div className="login-card">

        <img
          src="/media/image/logo.svg"
          alt="Zerodha Logo"
          className="login-logo"
        />

        <h1>Login</h1>

        <p>
          Login to access your trading account
        </p>

        <form>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

          <button
            type="button"
            className="google-btn"
          >
            Continue with Google
          </button>

        </form>

      </div>

    </section>
  );
};

export default LoginPage;
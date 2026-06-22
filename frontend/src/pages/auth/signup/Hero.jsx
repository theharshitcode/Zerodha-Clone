const Hero = () => {
  return (
    <section className="signup-hero">

      <h1>
        Open a free demat and trading account online
      </h1>

      <p>
        Start investing brokerage free and join a
        community of 1.6+ crore investors and traders
      </p>

      <div className="hero-content">

        <div className="hero-image">
          <img
            src="/media/image/account_open.svg"
            alt="signup"
          />
        </div>

        <div className="signup-form">

          <h2>Signup now</h2>

          <p>
            Or track your existing application
          </p>

          <div className="phone-input">

            <span>+91</span>

            <input
              type="text"
              placeholder="Enter your mobile number"
            />

          </div>

          <button>
            Get OTP
          </button>

          <small>
            By proceeding, you agree to the Zerodha
            terms & privacy policy
          </small>

        </div>

      </div>

    </section>
  );
};

export default Hero;
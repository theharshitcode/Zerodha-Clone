import "./HomePage.css"

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-image">
        <img
          src="/media/image/landing.svg"
          alt="Zerodha Hero"
        />
      </div>

      <div className="hero-content">
        <h1>
          Invest in everything
        </h1>

        <p>
          Online platform to invest in stocks,
          derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <button className="hero-btn">
          Sign up for free
        </button>

      </div>

    </section>
  );
};

export default Hero;
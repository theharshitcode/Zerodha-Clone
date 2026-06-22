import "./SupportPage.css";

const Hero = () => {
  return (
    <section className="support-hero">

      <div className="hero-container">

        <div className="hero-top">

          <h1>Support Portal</h1>

          <button>
            My Tickets
          </button>

        </div>

        <input
          className="support-search"
          type="text"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />

      </div>

    </section>
  );
};

export default Hero;
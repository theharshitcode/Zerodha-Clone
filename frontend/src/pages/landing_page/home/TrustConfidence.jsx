import "./HomePage.css"
const TrustConfidence = () => {
  return (
    <section className="trust">

      <div className="trust-left">

        <h2>Trust with confidence</h2>

        <div className="trust-item">
          <h3>Customer-first always</h3>
          <p>
            That's why 1.6+ crore customers trust Zerodha with
            ~ ₹6 lakh crores of equity investments, making us
            India’s largest broker; contributing to 15% of daily
            retail exchange volumes in India.
          </p>
        </div>

        <div className="trust-item">
          <h3>No spam or gimmicks</h3>
          <p>
            No gimmicks, spam, gamification, or annoying push
            notifications. High quality apps that you use at
            your pace, the way you like.
          </p>
        </div>

        <div className="trust-item">
          <h3>The Zerodha universe</h3>
          <p>
            Not just an app, but a whole ecosystem. Our
            investments in 30+ fintech startups offer you
            tailored services specific to your needs.
          </p>
        </div>

        <div className="trust-item">
          <h3>Do better with money</h3>
          <p>
            With initiatives like Nudge and Kill Switch,
            we don't just facilitate transactions,
            but actively help you do better with your money.
          </p>
        </div>

      </div>

      <div className="trust-right">

        <img
          src="/media/image/ecosystem.png"
          alt="Zerodha Ecosystem"
        />

        <h3>The Zerodha Universe</h3>

        <div className="trust-links">
          <a href="/">Explore our products</a>
          <a href="/">Try Kite demo</a>
        </div>

        <div className="kite-connect">
          <img
            src="/media/image/kiteconnect.png"
            alt="Kite Connect"
          />

          <p>
            Need more? Build your own trading and investing
            experience with Kite Connect, simple HTTP APIs
            to place orders, stream market data, manage your
            account, and more.
          </p>

          <a href="/">Explore →</a>
        </div>
        

      </div>

      

    </section>
  );
};

export default TrustConfidence;
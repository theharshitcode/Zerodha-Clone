import "./Signup.css";

const Benefits = () => {
  return (
<section className="benefits">

  <div className="benefits-wrapper">

    <div className="benefits-image">
      <img
        src="/media/image/acop-benefits.svg"
        alt="Benefits"
      />
      <h3>
    Benefits of opening a Zerodha demat account
  </h3>
      
    </div>

    <div className="benefits-content">

  <div className="benefit-item">
    <h3>Unbeatable pricing</h3>

    <p>
      Zero charges for equity & mutual fund investments.
      Flat ₹20 fees for intraday and F&O trades.
    </p>
  </div>

  <div className="benefit-item">
    <h3>Best investing experience</h3>

    <p>
      Simple and intuitive trading platform with an
      easy-to-understand user interface.
    </p>
  </div>

  <div className="benefit-item">
    <h3>No spam or gimmicks</h3>

    <p>
      Committed to transparency — no gimmicks,
      spam, "gamification", or intrusive push
      notifications.
    </p>
  </div>

  <div className="benefit-item">
    <h3>The Zerodha universe</h3>

    <p>
      More than just an app — gain free access
      to the entire ecosystem of our partner
      products.
    </p>
  </div>

</div>

  </div>

</section>
  );
};

export default Benefits;
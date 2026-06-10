import "./Signup.css";

const Steps = () => {
  return (
    <section className="steps">

      <h2>
        Steps to open a demat account with Zerodha
      </h2>

      <div className="steps-wrapper">

        <div className="steps-image">
          <img
            src="/media/image/steps-acop.svg"
            alt="Steps"
          />
        </div>

        <div className="steps-content">

          <div className="step-item">
            <span>01</span>
            <p>Enter the requested details</p>
          </div>

          <div className="step-item">
            <span>02</span>
            <p>Complete e-sign & verification</p>
          </div>

          <div className="step-item">
            <span>03</span>
            <p>Start investing!</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Steps;
import { useState } from "react";
import faqs from "./faqData";
import "./Signup.css";

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="faq-section">

      <h2>FAQs</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="faq-card"
        >

          <button
            className="faq-question"
            onClick={() =>
              setActive(
                active === index
                  ? null
                  : index
              )
            }
          >
            {faq.question}

            <span>
              {active === index ? "-" : "+"}
            </span>

          </button>

          {active === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}

        </div>
      ))}

    </section>
  );
};

export default FAQ;
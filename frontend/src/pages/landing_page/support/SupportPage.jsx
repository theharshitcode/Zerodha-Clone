import Hero from "./Hero";
import Featured from "./Featured";
import QuickLinks from "./QuickLinks";
import SupportCategory from "./SupportCategory";

import "./SupportPage.css";

const SupportPage = () => {
  return (
    <>
      <Hero />

      <section className="support-container">

        <div className="support-left">

          <SupportCategory
            title="Account Opening"
            icon="➕"
          />

          <SupportCategory
            title="Your Zerodha Account"
            icon="👤"
          />

          <SupportCategory
            title="Kite"
            icon="🪁"
          />

          <SupportCategory
            title="Funds"
            icon="₹"
          />

          <SupportCategory
            title="Console"
            icon="◎"
          />

        </div>

        <div className="support-right">

          <Featured />

          <QuickLinks />

        </div>

      </section>

    </>
  );
};

export default SupportPage;
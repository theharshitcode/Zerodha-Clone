import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import TrustConfidence from "./TrustConfidence";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <TrustConfidence />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
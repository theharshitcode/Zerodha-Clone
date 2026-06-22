import React from "react";
import "./HomePage.css"
import Hero from "./Hero";
import Awards from "./Awards";
import TrustConfidence from "./TrustConfidence";
import KiteConnect from "./KiteConnect";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <TrustConfidence />
      <KiteConnect/>
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
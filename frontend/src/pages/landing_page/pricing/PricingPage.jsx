import Hero from "./Hero";
import ChargesCards from "./ChargesCards";
import ChargesTable from "./ChargesTable";
import ChargesExplanation from "./ChargesExplanation";
import OpenAccount from "../OpenAccount";

import "./PricingPage.css";

const PricingPage = () => {
  return (
    <>
      <Hero />

      <ChargesCards />

      <ChargesTable />

      <ChargesExplanation />

      <OpenAccount />
    </>
  );
};

export default PricingPage;
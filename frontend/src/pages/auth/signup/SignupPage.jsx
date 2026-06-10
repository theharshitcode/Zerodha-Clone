import Hero from "./Hero";
import Investments from "./Investments";
import Steps from "./Steps";
import Benefits from "./Benefits";
import AccountTypes from "./AccountTypes";
import FAQ from "./FAQ";

import OpenAccount from "../../landing_page/OpenAccount";

const SignupPage = () => {
  return (
    <>
      <Hero />
      <Investments />
      <Steps />
      <Benefits />
      <AccountTypes />
      <FAQ />
      <OpenAccount />
    </>
  );
};

export default SignupPage;
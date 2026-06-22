import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
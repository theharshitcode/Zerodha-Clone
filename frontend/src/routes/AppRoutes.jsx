import { Routes, Route } from "react-router-dom";

import LandingLayout from "../components/layout/LandingLayout";

import HomePage from "../pages/landing_page/home/HomePage";
import AboutPage from "../pages/landing_page/about/AboutPage";
import PricingPage from "../pages/landing_page/pricing/PricingPage";
import ProductsPage from "../pages/landing_page/products/ProductsPage";
import SupportPage from "../pages/landing_page/support/SupportPage";
import NotFound from "../pages/landing_page/NotFound";

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <LandingLayout>
            <HomePage />
          </LandingLayout>
        }
      />

      <Route
        path="/about"
        element={
          <LandingLayout>
            <AboutPage />
          </LandingLayout>
        }
      />

      <Route
        path="/products"
        element={
          <LandingLayout>
            <ProductsPage />
          </LandingLayout>
        }
      />

      <Route
        path="/pricing"
        element={
          <LandingLayout>
            <PricingPage />
          </LandingLayout>
        }
      />

      <Route
        path="/support"
        element={
          <LandingLayout>
            <SupportPage />
          </LandingLayout>
        }
      />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;
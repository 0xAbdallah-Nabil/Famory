import "./App.css";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Card from "./Pages/Card/index.jsx";
import DiscountSection from "./components/DiscountSection/DiscountSection.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import OurServices from "./Pages/Home/OurServices.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <Router>
        <ScrollToTop />
        <DiscountSection />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/our-services/:id" element={<Card />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ReactLenis>
  );
}
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Error from "./Pages/Error/index.jsx";
import Card from "./Pages/Card/index.jsx";
import DiscountSection from "./components/DiscountSection/index.jsx";
import "./App.css";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import OurServices from "./Pages/OurServices/OurServices.jsx";
function App() {
  return (
    <Router basename="">
      <DiscountSection />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/our-services/:id" element={<Card />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

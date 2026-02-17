import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

import useCart from "../../hooks/useCart.js";

import CartHeader from "./CartHeader.jsx";
import CartBody from "./CartBody.jsx";
import CartFooter from "./CartFooter.jsx";
import EmptyCart from "./EmptyCart.jsx";

function Cart() {
  const { cart, isCartOpen, closeCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 500, once: false });
  }, []);

  if (!isCartOpen) return null;

  return (
    <section>
      {/* overlay */}
      <div
        onClick={() => closeCart()}
        className="fixed top-0 right-0 z-30 w-full h-screen bg-black opacity-70 rounded-t-sm"
      ></div>

      {/* cart sidebar */}
      <main
        data-aos="fade-left"
        className="fixed top-0 right-0 z-40  sm:w-[390px] w-full  h-screen bg-[#FFB5CF] transition-transform translate-x-0"
      >
        <div className="h-full grid grid-rows-[auto_1fr_auto]">
          <CartHeader />
          {cart.length > 0 ? <CartBody /> : <EmptyCart />}
          {cart.length > 0 ? <CartFooter /> : null}
        </div>
      </main>
    </section>
  );
}

export default Cart;

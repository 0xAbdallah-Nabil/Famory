import { useEffect } from "react";
import useCart from "../../hooks/useCart.js";
import CartHeader from "./CartHeader.jsx";
import CartBody from "./CartBody.jsx";
import CartFooter from "./CartFooter.jsx";
import EmptyCart from "./EmptyCart.jsx";

export default function Cart() {
  const { cart, isCartOpen, closeCart } = useCart();

  // Close on Escape + lock page scroll while open
  useEffect(() => {
    if (!isCartOpen) return;
    const onKey = (e) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-cocoa/50 backdrop-blur-sm"
        style={{ animation: "fade-in 0.25s ease-out both" }}
      />

      <aside
        className="absolute right-0 top-0 flex h-dvh w-full flex-col bg-cream shadow-2xl sm:max-w-[440px] sm:rounded-l-[2rem]"
        style={{ animation: "slide-in-right 0.35s cubic-bezier(0.22, 1, 0.36, 1) both" }}
      >
        <CartHeader />
        {cart.length > 0 ? (
          <>
            <CartBody />
            <CartFooter />
          </>
        ) : (
          <EmptyCart />
        )}
      </aside>
    </div>
  );
}
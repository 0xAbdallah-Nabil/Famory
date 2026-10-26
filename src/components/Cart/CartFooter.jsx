import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

export default function CartFooter() {
  const { cartTotal, closeCart } = useCart();

  return (
    <footer className="border-t border-primary/10 bg-white px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:rounded-bl-[2rem]">
      <div className="mb-4 flex items-end justify-between">
        <span className="text-cocoa/70">Total</span>
        <span className="font-display text-2xl text-cocoa">EGP {cartTotal}</span>
      </div>

      <Link
        to="/checkout"
        onClick={closeCart}
        className="block w-full rounded-full bg-primary py-3.5 text-center font-display text-white shadow-lift transition hover:bg-primary-dark active:scale-[0.98]"
      >
        Continue to order
      </Link>
      <button
        type="button"
        onClick={closeCart}
        className="mt-2 w-full rounded-full py-2.5 text-sm font-bold text-cocoa/60 transition hover:text-primary"
      >
        Keep shopping
      </button>
    </footer>
  );
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useCart from "../../hooks/useCart";

export default function CartHeader() {
  const { cart, closeCart } = useCart();

  return (
    <header className="flex items-center justify-between border-b border-primary/10 px-5 py-4 sm:rounded-tl-[2rem]">
      <div className="flex items-center gap-3">
        <h2 className="text-xl text-cocoa">Your Cart</h2>
        {cart.length > 0 && (
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-white">
            {cart.length} {cart.length === 1 ? "item" : "items"}
          </span>
        )}
      </div>
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="grid h-10 w-10 place-items-center rounded-full text-cocoa/70 transition hover:bg-primary-soft hover:text-primary active:scale-90"
      >
        <FontAwesomeIcon icon={faXmark} className="text-lg" />
      </button>
    </header>
  );
}
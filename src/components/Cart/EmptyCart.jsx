import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import useCart from "../../hooks/useCart";

export default function EmptyCart() {
  const { closeCart } = useCart();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
      <div className="grid h-24 w-24 place-items-center rounded-full bg-primary-soft">
        <FontAwesomeIcon icon={faBagShopping} className="text-4xl text-primary" />
      </div>
      <h3 className="text-xl text-cocoa">Your cart is empty</h3>
      <p className="max-w-[260px] text-cocoa/70">
        Pick something sweet from our menu and it will show up here.
      </p>
      <Link
        to="/our-services"
        onClick={closeCart}
        className="mt-2 rounded-full bg-primary px-7 py-3 font-display text-white shadow-lift transition hover:bg-primary-dark active:scale-95"
      >
        Browse the menu
      </Link>
    </div>
  );
}
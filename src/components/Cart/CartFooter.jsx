import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
export default function CartFooter() {
  const { cartTotal, closeCart } = useCart();
  return (
    <div className="bg-[#FFB5CF] flex justify-evenly items-center w-full p-5 pb-14">
      <Link
        to="/checkout"
        onClick={closeCart}
        className="
                  py-3 px-6 rounded-xl
                  bg-[#e60077]
                  text-white font-semibold
                  transform transition-all duration-300
                  hover:scale-105
                  hover:shadow-lg

                "
      >
        Continue to Order
      </Link>
      <h2>
        <span className="font-bold text-[1.5rem]">Total:</span> EGP {cartTotal}
      </h2>
    </div>
  );
}

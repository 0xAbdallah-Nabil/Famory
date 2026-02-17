import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CgCloseO } from "react-icons/cg";

import useCart from "../../hooks/useCart";
export default function CartHeader() {
  const { closeCart } = useCart();
  return (
    <div className="flex py-5 bg-[#f66397]">
      <h2 className="text-[1.5rem] font-bold z-50 m-auto">
        <FontAwesomeIcon icon={faCartPlus} /> Shopping Cart
      </h2>

      <CgCloseO
        onClick={() => closeCart()}
        className="active:scale-90 text-2xl z-50 m-auto font-bold"
      />
    </div>
  );
}

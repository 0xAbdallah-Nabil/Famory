import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function EmptyCart() {
  return (
    <div
      id="Cart-Body"
      className="flex flex-col gap-5 justify-center items-center h-[70vh] cursor-pointer text-center"
    >
      <div className="rounded-full px-5 py-7 bg-white">
        <FontAwesomeIcon
          icon={faBagShopping}
          className="text-6xl text-[#f66397]"
        />
      </div>
      <h2 className="font-bold">Your Cart is Empty</h2>
      <p className="max-w-[300px]">
        No items in your cart, please add some items to your cart list.
      </p>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import QuantityButtons from "../QuantityButtons";
import useCart from "../../hooks/useCart.js";
export default function CartBody() {
  const { cart, handleRemove } = useCart();
  return (
    <div id="Cart-Body" className="flex flex-col gap-3 p-2 overflow-y-auto ">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex gap-10 items-center justify-evenly w-full p-3 rounded-lg"
        >
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex gap-2 justify-evenly items-center w-full">
              <p className="font-bold">{item.name}</p>
              <div className="flex gap-2">
                <h2>Price:</h2>
                <p className="font-bold">EGP {item.price}</p>
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center mb-4">
              <QuantityButtons id={item.id} />

              <button
                onClick={() => handleRemove(item.id)}
                className="active:scale-90 hover:scale-105 transition-all duration-200 hover:text-red-500"
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>

            <hr className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

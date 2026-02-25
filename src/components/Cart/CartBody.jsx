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
            <div className="flex gap-2 justify-between items-center w-full">
              <p className="font-bold text-[18px]">{item.name}</p>
              <div className="flex gap-2">
                <h2>Price:</h2>
                <p className="font-bold">EGP {item.price}</p>
              </div>
            </div>

            <div className="flex flex-row gap-2 justify-between items-center mb-4 w-full">
              <p className="font-bold">Details:</p>
              {/* Show details if present */}
              {item.details ? (
                <span className="text-[16px] font-bold text-[#b5813a] font-cormorant">
                  {item.details}
                </span>
              ) : (
                <span className="text-[16px] font-bold text-[#b5813a] font-cormorant">{`(x${item.quantity}) - ${item.name} `}</span>
              )}
              <button
                onClick={() => handleRemove(item.id)}
                className="active:scale-90 hover:scale-105 transition-all duration-200 hover:text-red-500 ml-auto"
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

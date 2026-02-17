import useCart from "../../hooks/useCart.js";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useEffect, useState } from "react";
function QuantityButtons({ id }) {
  const { handleIncrease, handleDecrease, findQuantity, setQuantity } =
    useCart();
  const quantity = findQuantity(id);
  const [qnt, setQnt] = useState(0);
  useEffect(() => {
    setQnt(quantity);
  }, [quantity]);
  return (
    <div className="flex gap-2 sm:gap-3 items-center  w-full justify-center ">
      <h2 className="text-lg sm:text-xl font-semibold">Quantity:</h2>
      <ButtonGroup>
        <Button
          onClick={() => handleDecrease(id)}
          className=" active:scale-75 rounded-[3px] text-xl sm:text-2xl    transition-all duration-300"
        >
          -
        </Button>

        <input
          className="text-center w-[80px] border-1 border-gray-400 rounded-[3px] p-[3px] m-0 bg-white "
          value={qnt}
          onChange={(e) => setQuantity(id, e.target.value)}
        ></input>

        <Button
          onClick={() => handleIncrease(id)}
          className=" active:scale-75 rounded-[3px] text-xl sm:text-2xl    transition-all duration-300"
        >
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default QuantityButtons;

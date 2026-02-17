import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Quantity({ quantity, setQuantity }) {
  const handleDecrease = (quantity) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = (quantity) => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="flex gap-2 sm:gap-3 items-center  w-full justify-center">
      <h2 className="text-lg sm:text-xl font-semibold">Quantity:</h2>
      <ButtonGroup >
        <Button
          onClick={() => handleDecrease(quantity)}
          className="active:scale-90 rounded-[3px] text-xl sm:text-2xl    transition-all duration-300 hover:bg-transparent"
        >
          <span className="text-black">-</span>
        </Button>

        <input
          className="text-center   border-1 border-gray-400 rounded-[3px] p-[3px] m-0 w-full bg-white text-lg sm:text-xl"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <Button
          onClick={() => handleIncrease(quantity)}
          className=" active:scale-75 rounded-[3px] text-xl sm:text-2xl    transition-all duration-300"
        >
          <span className="text-black">+</span>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Quantity;

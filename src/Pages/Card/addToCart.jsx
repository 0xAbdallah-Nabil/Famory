import useCart from "../../hooks/useCart.js";
function AddToCart({ item, quantity, setQuantity }) {
  const { handleAddToCart, openCart } = useCart();
  return (
    <button
      onClick={() => {
        handleAddToCart(item, quantity);
        openCart();
        setQuantity(0);
      }}
      className="active:scale-90 bg-[#e60077] hover:scale-105 text-white font-bold py-2 px-6 rounded transition-all duration-300 w-full text-[20px]"
    >
      Add to Cart
    </button>
  );
}

export default AddToCart;

import React, { useState } from "react";
import useCart from "../../../hooks/useCart.js";
import Swal from "sweetalert2";
const Cinnabon = ({ PRODUCTS }) => {
  const cinnamonProducts = PRODUCTS || { classic: [], mini: [] };
  const { handleAddToCart, openCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("classic");
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, value) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 0) {
      setQuantities((prev) => ({
        ...prev,
        [productId]: numValue,
      }));
    }
  };

  const incrementQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }));
  };

  const getCartItems = () => {
    const allProducts = [...cinnamonProducts.classic, ...cinnamonProducts.mini];
    return allProducts
      .filter((product) => quantities[product.id] > 0)
      .map((product) => ({
        ...product,
        id: product.id,
        name: product.name,
        quantity: quantities[product.id],
        total: quantities[product.id] * product.price,
      }));
  };

  const getTotalPrice = () => {
    return getCartItems().reduce((sum, item) => sum + item.total, 0);
  };

  const hasItems = getCartItems().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const cartItems = getCartItems();
    if (cartItems.length === 0) {
      Swal.fire({
        title: "No items selected",
        text: "Please select at least one item to add to cart.",
        icon: "warning",
      });
      return;
    }
    // Add each selected item to the cart
    cartItems.forEach((item) => {
      handleAddToCart(item, item.quantity);
    });
    openCart();
    // Clear form after submit
    setQuantities({});
    setSelectedCategory("classic");
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex gap-3 mb-8 justify-center flex-wrap">
        <button
          onClick={() => setSelectedCategory("classic")}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === "classic"
              ? "bg-[#e60077] text-white shadow-lg scale-105"
              : "bg-white text-[#e60077] hover:bg-[#fbeaf5] border-2 border-[#e60077]"
          }`}
        >
          🍥 Family Cinnamon (4 PCS)
        </button>
        <button
          onClick={() => setSelectedCategory("mini")}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === "mini"
              ? "bg-[#e60077] text-white shadow-lg scale-105"
              : "bg-white text-[#e60077] hover:bg-[#fbeaf5] border-2 border-[#e60077]"
          }`}
        >
          ✨ Mini Box (9 PCS)
        </button>
      </div>

      {/* Products Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-amber-900 mb-2">
            {selectedCategory === "classic"
              ? "Family Cinnamon Rolls"
              : "Mini Cinnamon Box"}
          </h3>
          <p className="text-amber-700 italic">
            {selectedCategory === "classic"
              ? "Perfect for sharing - 4 delicious pieces"
              : "Bite-sized delights - 9 mini rolls"}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-4  justify-items-center">
          {cinnamonProducts[selectedCategory].map((product, index) => (
            <div
              key={product.id}
              className="sm:w-[80%] w-full bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#e60077] hover:border-[#e60077]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-evenly items-center mb-3">
                <div className="flex flex-row items-center gap-3 justify-between w-full">
                  <h4 className="text-lg font-bold text-black mb-1">
                    {product.name} : {product.pieces}
                  </h4>

                  <div className="flex gap-4">
                    <div className="text-xl font-bold text-black">
                      {product.price} EGP
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center gap-3 mt-4 ">
                <button
                  type="button"
                  onClick={() => decrementQuantity(product.id)}
                  className="w-10 h-10 rounded-full bg-[#e60077] text-white font-bold text-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 hover:bg-[#c80060]"
                >
                  −
                </button>
                <input
                  type="number"
                  min="0"
                  value={quantities[product.id] || 0}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                  className="w-20 h-10 text-center text-lg font-bold text-amber-900 border-2 border-[#e60077] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e60077] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => incrementQuantity(product.id)}
                  className="w-10 h-10 rounded-full bg-[#e60077] text-white font-bold text-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 hover:bg-[#c80060]"
                >
                  +
                </button>
              </div>
              {quantities[product.id] > 0 && (
                <div className="flex justify-center items-center gap-2 w-full">
                  <p className="text-sm text-[#e60077] font-semibold">
                    Subtotal
                  </p>
                  <p className="text-lg font-bold text-[#e60077]">
                    {quantities[product.id] * product.price} EGP
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!hasItems}
          className={`w-full py-4 text-xl font-bold rounded-2xl transition-all duration-300 shadow-lg transform
            ${
              hasItems
                ? "bg-[#e60077] text-white hover:bg-[#c80060] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                : "bg-[#e8ddd0] text-[#b09a85] cursor-not-allowed"
            }`}
        >
          🛒 Place Order - {getTotalPrice()} EGP
        </button>
      </form>
    </div>
  );
};

export default Cinnabon;

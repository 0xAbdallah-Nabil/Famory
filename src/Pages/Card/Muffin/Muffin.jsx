import React, { useState } from "react";
import useCart from "../../../hooks/useCart";

import Swal from "sweetalert2";
export default function Muffin({ muffinProducts }) {
  const [selectedCategory, setSelectedCategory] = useState("3pcs");
  const [quantities, setQuantities] = useState({});
  const { handleAddToCart, openCart } = useCart();
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
    const allProducts = [...muffinProducts["3pcs"], ...muffinProducts["6pcs"]];
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
    // Add each selected muffin to the cart individually
    cartItems.forEach((item) => {
      handleAddToCart(item, item.quantity);
    });
    setQuantities({}); // Clear the form after submit
    openCart();
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex gap-4 mb-8 justify-center flex-wrap">
        <button
          onClick={() => setSelectedCategory("3pcs")}
          className={`px-8 py-3.5 rounded-full font-bold transition-all duration-300 text-base ${
            selectedCategory === "3pcs"
              ? "bg-[#e60077] text-white shadow-lg scale-105"
              : "bg-white text-[#e60077] border-2 border-[#e60077] hover:bg-[#e60077] hover:text-white"
          }`}
        >
          3 Pieces
        </button>
        <button
          onClick={() => setSelectedCategory("6pcs")}
          className={`px-8 py-3.5 rounded-full font-bold transition-all duration-300 text-base ${
            selectedCategory === "6pcs"
              ? "bg-[#e60077] text-white shadow-lg scale-105"
              : "bg-white text-[#e60077] border-2 border-[#e60077] hover:bg-amber-50"
          }`}
        >
          6 Pieces
        </button>
      </div>

      {/* Products Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-black mb-2">
            {selectedCategory === "3pcs"
              ? "Muffins - 3 Pieces"
              : "Muffins - 6 Pieces"}
          </h3>
          <p className="text-black italic">
            {selectedCategory === "3pcs"
              ? "Perfect for a quick treat"
              : "Great for sharing or stocking up"}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-4">
          {muffinProducts[selectedCategory].map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-amber-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3 flex-1">
                  <h4 className="text-xl font-bold text-gray-900">
                    {product.name} : {product.pieces}
                  </h4>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {product.price} EGP
                </span>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => decrementQuantity(product.id)}
                  className="w-10 h-10 rounded-full bg-[#e60077] text-white font-bold text-2xl hover:bg-[#c80060] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
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
                  className="w-20 h-10 text-center text-2xl font-bold text-gray-900 border-2 border-[#e60077] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#e60077] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => incrementQuantity(product.id)}
                  className="w-10 h-10 rounded-full bg-[#e60077] text-white font-bold text-2xl hover:bg-[#c80060] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!hasItems}
          className={`w-full py-4 px-6 border-0 rounded-xl font-cormorant text-2xl font-bold tracking-widest transition-all duration-300
                        ${
                          hasItems
                            ? "bg-[#e60077] text-white hover:bg-[#c80060] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                            : "bg-[#e8ddd0] text-[#b09a85] cursor-not-allowed"
                        }`}
        >
          Place Order - {getTotalPrice()} EGP
        </button>
      </form>
    </div>
  );
}

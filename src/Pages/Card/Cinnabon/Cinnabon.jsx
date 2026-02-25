import React, { useState } from "react";
import useCart from "../../../hooks/useCart.js";
import Swal from "sweetalert2";
const Cinnabon = () => {
  const { handleAddToCart, openCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("classic");
  const [quantities, setQuantities] = useState({});
  const [showCart, setShowCart] = useState(false);

  const cinnamonProducts = {
    classic: [
      { id: "classic-4", name: "Classic Roll", pieces: "4 PCS", price: 350 },
      {
        id: "caramel-nuts-4",
        name: "Caramel Nuts Roll",
        pieces: "4 PCS",
        price: 430,
      },
      {
        id: "caramel-pecan-4",
        name: "Caramel Pecan Roll",
        pieces: "4 PCS",
        price: 550,
      },
      {
        id: "chocolate-4",
        name: "Chocolate Roll",
        pieces: "4 PCS",
        price: 390,
      },
      {
        id: "mix-caramel-nuts-4",
        name: "Mix Caramel Nuts Roll",
        pieces: "4 PCS",
        price: 405,
      },
      {
        id: "mix-caramel-pecan-4",
        name: "Mix Caramel Pecan Roll",
        pieces: "4 PCS",
        price: 460,
      },
      {
        id: "mix-chocolate-4",
        name: "Mix Chocolate Roll",
        pieces: "4 PCS",
        price: 380,
      },
    ],
    mini: [
      {
        id: "mini-classic-9",
        name: "Mini Classic Roll",
        pieces: "9 PCS",
        price: 400,
      },
      {
        id: "mini-chocolate-9",
        name: "Mini Chocolate Roll",
        pieces: "9 PCS",
        price: 480,
      },
      {
        id: "mini-caramel-nuts-9",
        name: "Mini Caramel Nuts Roll",
        pieces: "9 PCS",
        price: 500,
      },
      {
        id: "mini-pecan-9",
        name: "Mini Pecan Roll",
        pieces: "9 PCS",
        price: 600,
      },
      { id: "mini-mix-9", name: "Mini Mix Roll", pieces: "9 PCS", price: 490 },
    ],
  };

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
              className="sm:w-[80%] w-full bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-amber-100 hover:border-[#e60077]"
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
                  className="w-20 h-10 text-center text-lg font-bold text-amber-900 border-2 border-[#e60077] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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

        {/* Cart Summary */}
        {getCartItems().length > 0 && (
          <div className="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-[#e60077]">
                Order Summary
              </h3>
              <button
                type="button"
                onClick={() => setShowCart(!showCart)}
                className="text-[#e60077] hover:text-[#c80060] font-semibold"
              >
                {showCart ? "Hide Details ▲" : "Show Details ▼"}
              </button>
            </div>

            {showCart && (
              <div className="space-y-2 mb-4">
                {getCartItems().map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-2 border-b border-[#e60077] border-opacity-20"
                  >
                    <div>
                      <p className="font-semibold text-amber-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#e60077]">
                        {item.quantity} x {item.price} EGP
                      </p>
                    </div>
                    <p className="font-bold text-[#e60077]">{item.total} EGP</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center pt-4 border-t-2 border-[#e60077]">
              <span className="text-2xl font-bold text-[#e60077]">Total:</span>
              <span className="text-3xl font-bold text-[#e60077]">
                {getTotalPrice()} EGP
              </span>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-[#e60077] text-white text-xl font-bold rounded-2xl hover:bg-[#c80060] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
        >
          🛒 Place Order - {getTotalPrice()} EGP
        </button>
      </form>
    </div>
  );
};

export default Cinnabon;

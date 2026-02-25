import React, { useState } from "react";
import useCart from "../../../hooks/useCart.js";
import CreamyPuffsForm from "../CreamyBuffs/CreamyBuffs.jsx";
import Swal from "sweetalert2";
export const Ramadan = () => {
  const { handleAddToCart, openCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("basbousa");
  const [quantities, setQuantities] = useState({});
  const ramadanProducts = {
    basbousa: [
      {
        id: "cream-pistachio",
        name: "Cream & Pistachio Basbousa",
        serves: "Serves 5–6",
        description:
          "Soft basbousa topped with rich cream and premium pistachios.",
        price: 300,
      },
      {
        id: "date-hazelnut",
        name: "Date & Hazelnut Basbousa",
        serves: "Serves 5–6",
        description:
          "Moist basbousa filled with caramelized dates and crunchy hazelnuts.",
        price: 330,
      },
      {
        id: "mixed-tray",
        name: "Mixed Tray (Half Date & Half Cream)",
        serves: "Serves 5–6",
        description:
          "Half Date & Hazelnut, half Cream & Pistachio — the perfect balance.",
        price: 310,
      },
    ],
    creamyPuffs: [
      {
        id: "premium-pistachio",
        name: "Premium Pistachio Kunafa",
        price: 70,
      },
      {
        id: "kinder-cream",
        name: "Kinder Cream Kunafa",
        price: 65,
      },
      {
        id: "lotus-crunch",
        name: "Lotus Crunch Kunafa",
        price: 60,
      },
      {
        id: "apricot-qamar",
        name: "Apricot Qamar El-Din",
        price: 62,
      },
      {
        id: "caramelized-date",
        name: "Caramelized Date Kunafa",
        price: 58,
      },
      {
        id: "ramadan-sobya",
        name: "Ramadan Sobya Delight",
        price: 55,
      },
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
    const allProducts = [
      ...ramadanProducts.basbousa,
      ...ramadanProducts.creamyPuffs,
    ];
    return allProducts
      .filter((product) => quantities[product.id] > 0)
      .map((product) => ({
        ...product,
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
      // Check if item already exists in cart by id
      // handleAddToCart already handles this logic, so just call it
      handleAddToCart(item, item.quantity);
    });
    openCart();
    // Clear form after submit
    setQuantities({});
    setSelectedCategory("basbousa");
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex gap-3 mb-8 justify-center flex-wrap">
        <button
          onClick={() => setSelectedCategory("basbousa")}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === "basbousa"
              ? "bg-[#e60077] text-white shadow-lg scale-105"
              : "bg-white text-[#e60077] hover:bg-[#fbeaf5] border-2 border-[#e60077]"
          }`}
        >
          Basbousa Trays
        </button>
        <button
          onClick={() => setSelectedCategory("creamyPuffs")}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === "creamyPuffs"
              ? "bg-[#e60077] text-white shadow-lg scale-105"
              : "bg-white text-[#e60077] hover:bg-[#fbeaf5] border-2 border-[#e60077]"
          }`}
        >
          Ramadan Creamy Puffs
        </button>
      </div>

      {/* Products Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-black mb-2">
            {selectedCategory === "basbousa"
              ? "Traditional Basbousa Trays"
              : "Kunafa Creamy Puffs"}
          </h3>
          <p className="text-black italic">
            {selectedCategory === "basbousa"
              ? "Perfect for iftar gatherings"
              : "Unique Ramadan flavors in every bite"}
          </p>
        </div>

        {/* Basbousa Products */}
        {selectedCategory === "basbousa" && (
          <div className="grid grid-cols-1 gap-4">
            {ramadanProducts.basbousa.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#e60077] hover:border-[#e60077]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-black mb-2">
                      {product.name}
                    </h4>
                    <p className="text-black mb-2">{product.description}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-white font-semibold bg-[#e60077] bg-opacity-20 px-3 py-1 rounded-full">
                        {product.serves}
                      </span>
                      <span className="text-2xl font-bold text-black">
                        {product.price} EGP
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => decrementQuantity(product.id)}
                      className="w-10 h-10 rounded-full bg-[#e60077] text-white font-bold text-xl  transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
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
                      className="w-20 h-10 text-center text-lg font-bold text-[#e60077] border-2 border-[#e60077] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => incrementQuantity(product.id)}
                      className="w-10 h-10 rounded-full bg-[#e60077] text-white font-bold text-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 hover:bg-[#c80060]"
                    >
                      +
                    </button>
                    {quantities[product.id] > 0 && (
                      <div className="ml-4 text-right">
                        <p className="text-sm text-black font-semibold">
                          Subtotal
                        </p>
                        <p className="text-lg font-bold text-[#e60077]">
                          {quantities[product.id] * product.price} EGP
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Submit Button */}
        {selectedCategory === "basbousa" && (
          <button
            type="submit"
            className="w-full py-4 bg-[#e60077] text-white text-xl font-bold rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            Place Order - {getTotalPrice()} EGP
          </button>
        )}
      </form>
      {/* Creamy Puffs Products */}
      {selectedCategory === "creamyPuffs" && (
        <div className="w-full">
          <CreamyPuffsForm FLAVORS={ramadanProducts.creamyPuffs} />
        </div>
      )}
    </div>
  );
};

export default Ramadan;

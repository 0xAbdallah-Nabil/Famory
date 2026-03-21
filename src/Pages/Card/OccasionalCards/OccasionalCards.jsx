import React, { useState } from "react";
import useCart from "../../../hooks/useCart.js";
import Swal from "sweetalert2";

const OccasionalCards = ({ PRODUCTS }) => {
  const [selectedCategory, setSelectedCategory] = useState("eid");
  const { handleAddToCart, openCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [lightboxImage, setLightboxImage] = useState(null);

  const giftCards = PRODUCTS;

  const handleQuantityChange = (cardId, value) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 0) {
      setQuantities((prev) => ({
        ...prev,
        [cardId]: numValue,
      }));
    }
  };

  const incrementQuantity = (cardId) => {
    setQuantities((prev) => ({
      ...prev,
      [cardId]: (prev[cardId] || 0) + 1,
    }));
  };

  const decrementQuantity = (cardId) => {
    setQuantities((prev) => ({
      ...prev,
      [cardId]: Math.max((prev[cardId] || 0) - 1, 0),
    }));
  };

  const getCartItems = () => {
    return giftCards
      .filter((card) => quantities[card.id] > 0)
      .map((card) => ({
        ...card,
        quantity: quantities[card.id],
        total: quantities[card.id] * card.price,
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
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="w-full">
      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={lightboxImage}
              alt="Gift Card Preview"
              className="w-[300px]  object-fit rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex gap-4 mb-8 justify-center flex-wrap">
        <button
          onClick={() => setSelectedCategory("eid")}
          className={`px-8 py-3.5 rounded-full font-bold transition-all duration-300 text-base ${
            selectedCategory === "eid"
              ? "text-white shadow-lg scale-105"
              : "bg-white border-2 hover:bg-pink-50"
          }`}
          style={{
            backgroundColor:
              selectedCategory === "eid" ? "#e60077" : "transparent",
            borderColor: "#e60077",
            color: selectedCategory === "eid" ? "white" : "#e60077",
          }}
        >
          Eid Cards
        </button>
        <button
          onClick={() => setSelectedCategory("birthday")}
          className={`px-8 py-3.5 rounded-full font-bold transition-all duration-300 text-base ${
            selectedCategory === "birthday"
              ? "text-white shadow-lg scale-105"
              : "bg-white border-2 hover:bg-pink-50"
          }`}
          style={{
            backgroundColor:
              selectedCategory === "birthday" ? "#e60077" : "transparent",
            borderColor: "#e60077",
            color: selectedCategory === "birthday" ? "white" : "#e60077",
          }}
        >
          Birthday Cards
        </button>
        <button
          onClick={() => setSelectedCategory("normal")}
          className={`px-8 py-3.5 rounded-full font-bold transition-all duration-300 text-base ${
            selectedCategory === "normal"
              ? "text-white shadow-lg scale-105"
              : "bg-white border-2 hover:bg-pink-50"
          }`}
          style={{
            backgroundColor:
              selectedCategory === "normal" ? "#e60077" : "transparent",
            borderColor: "#e60077",
            color: selectedCategory === "normal" ? "white" : "#e60077",
          }}
        >
          Gift Cards
        </button>
      </div>

      {/* Products Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Gift Card Display */}
        {giftCards
          .filter((card) => card.category === selectedCategory)
          .map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2"
              style={{ borderColor: "#e60077" }}
            >
              {/* Both Card Images Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {card.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group"
                    onClick={() => openLightbox(image)}
                  >
                    <img
                      src={image}
                      alt={`${card.name} - Design ${imgIndex + 1}`}
                      className="w-full  object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        🔍 Click to view
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Info */}
              <div className="mb-6 text-center">
                <h4 className="text-xl font-bold text-gray-900">{card.name}</h4>
                <p className="text-gray-600 mt-2">
                  You will receive both card designs shown above
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => decrementQuantity(card.id)}
                  className="w-10 h-10 rounded-full bg-[#e60077] text-white font-bold text-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 hover:bg-[#c80060]"
                >
                  −
                </button>
                <input
                  type="number"
                  min="0"
                  value={quantities[card.id] || 0}
                  onChange={(e) =>
                    handleQuantityChange(card.id, e.target.value)
                  }
                  className="w-20 h-10 text-center text-lg font-bold text-amber-900 border-2 border-[#e60077] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e60077] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => incrementQuantity(card.id)}
                  className="w-10 h-10 rounded-full bg-[#e60077] text-white font-bold text-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 hover:bg-[#c80060]"
                >
                  +
                </button>
              </div>
              {quantities[card.id] > 0 && (
                <div className="flex justify-center items-center gap-2 w-full mt-4">
                  <p className="text-sm text-[#e60077] font-semibold">
                    Subtotal
                  </p>
                  <p className="text-lg font-bold text-[#e60077]">
                    {quantities[card.id] * card.price} EGP
                  </p>
                </div>
              )}
            </div>
          ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 text-white text-xl font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
          style={{ backgroundColor: "#e60077" }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          🛒 Place Order - {getTotalPrice()} EGP
        </button>
      </form>
    </div>
  );
};

export default OccasionalCards;

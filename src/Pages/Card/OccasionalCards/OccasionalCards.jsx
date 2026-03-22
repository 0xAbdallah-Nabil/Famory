import React, { useState } from "react";
import useCart from "../../../hooks/useCart.js";
import Swal from "sweetalert2";
import CategoryButton from "./CategoryButton.jsx";
const OccasionalCards = ({ PRODUCTS }) => {
  const [selectedCategory, setSelectedCategory] = useState("eid");
  const { handleAddToCart, openCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

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

  const nextImage = (cardId, totalImages, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [cardId]: ((prev[cardId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (cardId, totalImages, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [cardId]: ((prev[cardId] || 0) - 1 + totalImages) % totalImages,
    }));
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
              className="w-[300px] object-fit rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex gap-4 mb-8 justify-center flex-wrap">
        <CategoryButton
          title="Eid Cards"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selected="eid"
        />
        <CategoryButton
          title="Birthday Cards"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selected="birthday"
        />
        <CategoryButton
          title="Anniversary Cards"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selected="normal"
        />
      </div>

      {/* Products Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Gift Card Display */}
        {giftCards
          .filter((card) => card.category === selectedCategory)
          .map((card) => {
            const currentIndex = currentImageIndex[card.id] || 0;
            return (
              <div
                key={card.id}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2"
                style={{ borderColor: "#e60077" }}
              >
                {/* Image Slider */}
                <div className="relative mb-6 max-w-md mx-auto">
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                    onClick={() => openLightbox(card.images[currentIndex])}
                  >
                    <img
                      src={card.images[currentIndex]}
                      alt={`${card.name} - Design ${currentIndex + 1}`}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        🔍 Click to view
                      </span>
                    </div>
                  </div>

                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={(e) => prevImage(card.id, card.images.length, e)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#e60077] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={(e) => nextImage(card.id, card.images.length, e)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#e60077] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {card.images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => ({
                            ...prev,
                            [card.id]: index,
                          }));
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentIndex === index
                            ? "bg-[#e60077] w-8"
                            : "bg-white/70 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {currentIndex + 1} / {card.images.length}
                  </div>
                </div>

                {/* Card Info */}
                <div className="mb-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    {card.name}
                  </h4>
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
            );
          })}

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

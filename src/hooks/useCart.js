import { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function useCart() {
  const { cart, setCart, cartTotal, setCartTotal, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  useEffect(() => {
    setCartTotal(cart.reduce((a, b) => a + b.quantity * b.price, 0));
  }, [cart, setCartTotal]);

  const handleIncrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const findQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };
  const setQuantity = (id, quantity) => {
    const qty = isNaN(quantity) || quantity < 0 ? 0 : Number(quantity);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };
  const handleToggleCart = () => setIsCartOpen(!isCartOpen);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const handleDecrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const handleClear = () => setCart([]);
  const handleAddToCart = (item, quantity) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If it exists, update quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        // Otherwise, add new item
        return [...prevCart, { ...item, quantity, }];
      }
    });
  };
  const handleSendToWhatsApp = () => {
    const phoneNumber = "+201285596279"; // brand's WhatsApp number (replace with real one)

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Create message text
    let message = "🛍️ *New Order*\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Qty: ${
        item.quantity
      } - Price: $${item.price}\n`;
    });
    message += `\n💰 *Total:* EGP${cartTotal}`;

    // Encode for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp chat
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return {
    cart,
    setCart,
    cartTotal,
    handleIncrease,
    handleDecrease,
    handleRemove,
    handleClear,
    handleAddToCart,
    handleSendToWhatsApp,
    isCartOpen,
    setIsCartOpen,
    handleToggleCart,
    openCart,
    closeCart,
    findQuantity,
    setQuantity,
  };
}

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig.js";

const handleCheckout = async (cartItems, checkoutData) => {
  try {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    await addDoc(collection(db, "orders"), {
      customer: checkoutData,
      items: cartItems,
      totalPrice: totalPrice,
      status: "pending",
      createdAt: serverTimestamp(),
    });

  } catch (error) {
    console.error("Error adding order:", error);
  }
};

export default handleCheckout;

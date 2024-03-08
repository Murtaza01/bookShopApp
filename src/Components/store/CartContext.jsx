import React, { createContext, useState } from "react";

export const context = createContext({
  items: [],
  totalPrice: 0,
  setTotalPrice: () => {},
  setItems: () => {},
});
const storedItems = JSON.parse(localStorage.getItem("cartItems"));
const storedPrice = JSON.parse(localStorage.getItem("totalPrice"));

export default function CartContext({ children }) {
  const [currentPrice, setCurrentPrice] = useState(storedPrice || 0);
  const [cartItems, setCartItems] = useState(storedItems || []);

  localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
  localStorage.setItem("totalPrice", JSON.stringify(currentPrice));

  const contextValue = {
    items: cartItems,
    totalPrice: currentPrice,
    setTotalPrice: setCurrentPrice,
    setItems: setCartItems,
  };
  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

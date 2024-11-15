import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [count, setCount] = useState();
  const [items, setItems] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

  useEffect(() => {
    setCount(items.length)
    if (items.length > 0){
      localStorage.setItem("cart", JSON.stringify(items)) 
    }
  }, [items])

  return (
    <CartContext.Provider value={{ count, setCount, items, setItems }}>
      {children}
    </CartContext.Provider>
  );
}

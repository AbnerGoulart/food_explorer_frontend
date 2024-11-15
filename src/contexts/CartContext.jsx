import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setCount(items.length)
  }, [items])

  return (
    <CartContext.Provider value={{ count, setCount, items, setItems }}>
      {children}
    </CartContext.Provider>
  );
}

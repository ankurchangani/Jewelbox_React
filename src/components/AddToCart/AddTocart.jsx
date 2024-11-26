// src/components/AddToCart/AddToCart.jsx
import React, { createContext, useContext, useState } from 'react';

// Creating the Cart Context
const CartContext = createContext();

// CartProvider component to provide cart state
export function CartProvider({ children }) {
  const [cart, setCart] = useState({ count: 0 });

  // Provide cart state and methods to children
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to access cart state
export function useCart() {
  return useContext(CartContext);
}

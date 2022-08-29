import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [countItems, setCountItems] = React.useState(0);
  const updateCount = (val) => {
    setCountItems(countItems + val);
  };
  return <CartContext.Provider  value={{ countItems, updateCount }}>{children}</CartContext.Provider>;
};

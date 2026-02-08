import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getQuantity = () => cart.reduce((acc, current) => acc + current.quantity, 0);

  const getSubtotal =  () => cart.reduce((acc, item) => acc + item.data.price * item.quantity, 0);

  const getTotal = () => getSubtotal() + (getSubtotal() * 0.16);

  const addToCart = (product, quantityToAdd = 1) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item.id === product.id);

      if (exists) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: quantityToAdd }];
    });
  };

const deleteToCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
}

const deleteAll = () => {
    setCart([]);
}

  return (
    <CartContext.Provider value={{ cart, getQuantity, getSubtotal, getTotal, addToCart, deleteToCart, deleteAll}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

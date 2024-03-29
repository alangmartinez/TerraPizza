import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      // If the cart is empty, return an empty array
      return JSON.parse(localStorage.getItem("cart") || []);
    } catch (e) {
      // In case of error, return an empty array
      return [];
    }
  });
  
  function AddToCart(item) {
    const InCart = cart.some((cartItem) => cartItem.id === item.id);
    
    InCart
    ? setCart(
      cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          // If the item is already in the cart, increase the quantity
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else {
          return cartItem;
        }
      })
        )
        : // If not in the cart, add it
        setCart([...cart, { ...item, quantity: 1 }]);
      }
      
      function RemoveFromCart(item) {
        //Remove from cart
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
      }
      
      function ClearCart() {
        setCart([]);
      }
      
      // Upadte the cart in the localStorage each time that cart undergoes a modification
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        
        if (cart.length !== 0) {
          setTotal(
            cart.reduce((acc, item) => {
              return acc + item.price * item.quantity;
            }, 0)
            );
          }
        }, [cart]);

        const [total, setTotal] = useState(0);
        
        return (
          <CartContext.Provider
      value={{ AddToCart, cart, RemoveFromCart, ClearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

import { createContext, useEffect, useState } from "react";

const addCartItem = (cartIems,productToAdd) => {
    const existingCartItem = cartIems.find(
        (cartIem) => cartIem.id===productToAdd.id
    );

    if(existingCartItem){
        return cartIems.map((cartIem) => 
            cartIem.id===productToAdd.id ? {...cartIem,quantity : cartIem.quantity+1} : cartIem
        )
    } else {
            return [...cartIems,{...productToAdd,quantity:1}]
    }
}

const removeCartItem = (cartIems,productToRemove) => {
    const existingCartItem = cartIems.find(
        (cartIem) => cartIem.id===productToRemove.id
    );

    if(existingCartItem.quantity>1){
        return cartIems.map((cartIem) => 
            cartIem.id===productToRemove.id ? {...cartIem,quantity : cartIem.quantity-1} : cartIem
        )
    } else {
        return cartIems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
}

const clearCartItem = (cartIems,productToRemove) => {
    return cartIems.filter((cartItem) => cartItem.id !== productToRemove.id);
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartIems : [],
    addItemsToCart : () => {},
    cartCount : 0,
    removeItemsToCart : () => {},
    clearItemFromCart : () => {},
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartIems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        const newCartCount = cartIems.reduce((total,cartItem) => total + cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartIems])
    const removeItemsToCart = (productToAdd) => {
        setCartItems(removeCartItem(cartIems,productToAdd));
    }
    const clearItemFromCart = (productToAdd) => {
        setCartItems(clearCartItem(cartIems,productToAdd));
    }
    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartIems,productToAdd));
    }
    useEffect(() => {
        const newCartTotal = cartIems.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.price,
          0
        );
        setCartTotal(newCartTotal);
      }, [cartIems]);
    const value = {isCartOpen,setIsCartOpen,cartIems,cartIems,addItemsToCart,cartCount,removeItemsToCart,clearItemFromCart,cartTotal};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}
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

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartIems : [],
    addItemsToCart : () => {},
    cartCount : 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartIems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    useEffect(() => {
        const newCartCount = cartIems.reduce((total,cartItem) => total + cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartIems])
    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartIems,productToAdd));
    }
    const value = {isCartOpen,setIsCartOpen,cartIems,cartIems,addItemsToCart,cartCount};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}
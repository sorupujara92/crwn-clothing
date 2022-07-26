import { createAction } from "../../utils/reducers/reducers.util"
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean); 

export const setCategories = (newCartItems,newCartTotal,newCartCount) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{cartIems : newCartItems,cartTotal:newCartTotal,cartCount:newCartCount})

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


export const clearCartItem = (cartIems,productToRemove) => {
    return cartIems.filter((cartItem) => cartItem.id !== productToRemove.id);
}


export const removeItemsToCart = (cartIems,productToAdd) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, removeCartItem(cartIems,productToAdd));
}
export const clearItemFromCart = (cartIems,productToAdd) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, clearCartItem(cartIems,productToAdd));
}
export const addItemsToCart = (cartIems,productToAdd) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, addCartItem(cartIems,productToAdd));
}
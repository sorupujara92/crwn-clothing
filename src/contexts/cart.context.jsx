// import { createContext, useEffect, useState } from "react";
// import { useReducer } from "react";
// import { createAction } from "../utils/reducers/reducers.util";
// const addCartItem = (cartIems,productToAdd) => {
//     const existingCartItem = cartIems.find(
//         (cartIem) => cartIem.id===productToAdd.id
//     );

//     if(existingCartItem){
//         return cartIems.map((cartIem) => 
//             cartIem.id===productToAdd.id ? {...cartIem,quantity : cartIem.quantity+1} : cartIem
//         )
//     } else {
//             return [...cartIems,{...productToAdd,quantity:1}]
//     }
// }

// const removeCartItem = (cartIems,productToRemove) => {
//     const existingCartItem = cartIems.find(
//         (cartIem) => cartIem.id===productToRemove.id
//     );

//     if(existingCartItem.quantity>1){
//         return cartIems.map((cartIem) => 
//             cartIem.id===productToRemove.id ? {...cartIem,quantity : cartIem.quantity-1} : cartIem
//         )
//     } else {
//         return cartIems.filter((cartItem) => cartItem.id !== productToRemove.id);
//     }
// }

// const CART_ACTION_TYPES = {
//     'SET_CART_ITEMS' : 'SET_CART_ITEMS',
//     'SET_IS_CART_OPEN' : 'SET_IS_CART_OPEN'
// }

// const INITIAL_STATE = {
//     isCartOpen : false,
//     cartIems : [],
//     cartCount : 0,
//     cartTotal : 0
// }

// const clearCartItem = (cartIems,productToRemove) => {
//     return cartIems.filter((cartItem) => cartItem.id !== productToRemove.id);
// }

// export const CartContext = createContext({
//     isCartOpen : false,
//     setIsCartOpen : () => {},
//     cartIems : [],
//     addItemsToCart : () => {},
//     cartCount : 0,
//     removeItemsToCart : () => {},
//     clearItemFromCart : () => {},
//     cartTotal: 0
// });



// export const CartProvider = ({children}) => {


//     const cartReducer = (state,action) => {
//         const {type,payload} = action;

//         switch(type) {
//             case CART_ACTION_TYPES.SET_CART_ITEMS:
//                 return {...state,...payload}
//             case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//                 return {...state,isCartOpen : payload}
//             default : 
//                 throw new Error(`Unhandler type ${type}`)    
//         }

//     }
//     const[{ cartCount, cartTotal, isCartOpen, cartIems },disptch] =  useReducer(cartReducer,INITIAL_STATE);

    
//     //  const [isCartOpen,setIsCartOpen] = useState(false);
//     // const [cartIems,setCartItems] = useState([]);
//     // const [cartCount,setCartCount] = useState(0);
//     // const [cartTotal, setCartTotal] = useState(0);
//     // useEffect(() => {
//     //     const newCartCount = cartIems.reduce((total,cartItem) => total + cartItem.quantity,0)
//     //     setCartCount(newCartCount)
//     // },[cartIems])

//     const updateCartItemsReducer = (newCartItems) => {
//         const newCartCount = cartIems.reduce((total,cartItem) => total + cartItem.quantity,0)
//         const newCartTotal = cartIems.reduce(
//             (total, cartItem) => total + cartItem.quantity * cartItem.price,
//             0
//           );

//           disptch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{cartIems : newCartItems,cartTotal:newCartTotal,cartCount:newCartCount}));

//     }

//     const setIsCartOpen = (bool) => {
//         disptch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
//     }
//     const removeItemsToCart = (productToAdd) => {
//         updateCartItemsReducer(removeCartItem(cartIems,productToAdd));
//     }
//     const clearItemFromCart = (productToAdd) => {
//         updateCartItemsReducer(clearCartItem(cartIems,productToAdd));
//     }
//     const addItemsToCart = (productToAdd) => {
//         updateCartItemsReducer(addCartItem(cartIems,productToAdd));
//     }
//     // useEffect(() => {
//     //     const newCartTotal = cartIems.reduce(
//     //       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     //       0
//     //     );
//     //     setCartTotal(newCartTotal);
//     //   }, [cartIems]);
//     const value = {isCartOpen,setIsCartOpen,cartIems,cartIems,addItemsToCart,cartCount,removeItemsToCart,clearItemFromCart,cartTotal};
//     return (
//         <CartContext.Provider value={value}>{children}</CartContext.Provider>
//     );
// }
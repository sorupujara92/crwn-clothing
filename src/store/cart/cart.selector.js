import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],(cart) => cart.cartIems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],(cart) => cart.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],(cartIems) => cartIems.reduce((total,cartItem) => total + cartItem.quantity,0));


export const selectCartTotal = createSelector(
    [selectCartItems],(cartIems) => cartIems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      ));

      
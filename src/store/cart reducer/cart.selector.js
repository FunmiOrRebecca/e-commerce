import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import { createSelector } from "reselect";



export const selectCartReducer = (state) => {
    return state.cart
};


export const selectCartItems = createSelector(
    [selectCartReducer], (cart) => cart.cartItems
    
)

export const selectCartCount = createSelector(
    [selectCartItems], (cartItems) => cartItems.reduce((count, cartItem) => {
        return cartItem.quantity + count
    }, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],(cartItems) =>  cartItems.reduce((total, cartItem) => {
        return ((cartItem.quantity * cartItem.price) + total)
    }, 0)
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer], (cart) => cart.isCartOpen
)
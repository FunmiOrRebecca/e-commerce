import { combineReducers } from "redux";
import { userReducer } from "./userReducer/user.reducer";
import { categoriesReducer } from "./categoriesReducer/categories.reducer";
import { cartReducer } from "./cart reducer/cart.reducer";
import { productsReducer } from "./products reducer/products.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    products: productsReducer

})
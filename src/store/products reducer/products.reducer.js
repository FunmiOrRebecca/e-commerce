import { PRODUCTS_ACTION_TYPES } from "./products.types";
import products from "../../THE_PRODUCTS";

const PRODUCTS_INITIAL_STATE = {
    currentCategory: null,
    searchString: "",
    products: products,
    isLoading: false,
    error: null
}
export const productsReducer = (state = PRODUCTS_INITIAL_STATE, action={}) =>{
    const{ type, payload} = action;
    switch(type){
        case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
            return {...state, isLoading: true}
        case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {...state, products: payload, isLoading: false}
        case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
            return {...state, error:payload, isLoading:false}
        case PRODUCTS_ACTION_TYPES.SET_CURRENT_CATEGORY:
            return {...state, currentCategory:payload}
        case PRODUCTS_ACTION_TYPES.SET_SEARCH_STRING:
            return {...state, searchString:payload}
            default:
            return {...state}
    }
} 
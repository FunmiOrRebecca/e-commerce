import { createAction } from "../../utils/reducer.utils";
import { PRODUCTS_ACTION_TYPES } from "./products.types";


export const fetchCategoriesStart = () => {
    return createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);
}
export const fetchCategoriesSuccess = (products) => {
    return createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products);
}
export const fetchCategoriesFailed = (error) => {
    return createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);
}

export const setCurrentCategory = (category) => {
    return createAction(PRODUCTS_ACTION_TYPES.SET_CURRENT_CATEGORY, category)
}
export const setSearchString = (searchString) => {
    return createAction(PRODUCTS_ACTION_TYPES.SET_SEARCH_STRING, searchString)
}
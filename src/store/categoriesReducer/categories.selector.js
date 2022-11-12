import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;



export const selectCategories = createSelector(
    [selectCategoriesReducer], (categoriesReducerSlice) => categoriesReducerSlice.categories
    
)


export const selectMainCategories = createSelector(
    [selectCategories], (categoriesArray) => categoriesArray.map((category) => {
        return category.MainCategory;
    })
)

export const selectIsLoading = createSelector(
    [selectCategoriesReducer], (categoriesReducerSlice) => categoriesReducerSlice.isLoading
)
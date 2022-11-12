import { useSelector } from "react-redux";
import { createSelector } from "reselect";


export const selectProductReducer = (state) => state.products;

export const selectProducts = createSelector(
    [selectProductReducer], (productsReducerSlice) => productsReducerSlice.products
)

export const selectFlashSalesProducts = createSelector(
    [selectProducts], (products) => products.filter((product) => {
        return product.additionalDetails.flashSales === true
    })
)

export const selectTopBrandsProducts = createSelector(
    [selectProducts], (products) => products.filter((product) => {
        return product.brandDetails.topBrand === true
    })
)

export const selectTopCategoriesProducts = createSelector(
    [selectProducts], (products) => products.filter((product) => {
        return product.categoryDetails.topCategory === true
    })

)

export const selectTopCategories = createSelector(
    [selectTopCategoriesProducts], (products) => products.reduce((acc, product, index) => {
        if(acc && (!acc.includes(product.categoryDetails.MainCategory))){
            acc[index] = product.categoryDetails.MainCategory
        }
        return acc;
    }, [])
)
export const selectTopBrands= createSelector(
    [selectTopBrandsProducts], (products) => products.reduce((acc, product, index) => {
        if(acc && (!acc.includes(product.brandDetails.brandName))){
            acc[index] = product.brandDetails.brandName
        }
        return acc;
    }, [])
)
export const selectCurrentCategory = createSelector(
    
    [selectProductReducer], (productReducerSlice) =>  productReducerSlice.currentCategory
)
export const selectCurrentCategoryProducts = createSelector(
    [selectCurrentCategory, selectProducts], (currentCategory, products) => products.filter((product) => {
        return product.categoryDetails.category === currentCategory;
    })
)

export const selectSearchString = createSelector(
    [selectProductReducer], (productReducerSlice) => productReducerSlice.searchString
)


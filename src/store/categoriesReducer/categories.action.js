import { createAction } from "../../utils/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase";

export const fetchCategoriesStart =  () => {
   return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}
export const fetchCategoriesSuccess =  (categories) => {
   return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);
}
export const fetchCategoriesFailed =  (error) => {
   return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}

export const fetchCategoriesOnAppLoad = () => async (dispatch) => {
   dispatch(fetchCategoriesStart());
   try {
             const categories = await getCategoriesAndDocuments();
             dispatch(fetchCategoriesSuccess(categories))
   } catch (error) {
      dispatch(fetchCategoriesFailed(error));
   }
}









export const setCategories = (categories)=> {
   return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categories);
}
// export const setCategories = (categories)=> {
//     return({type:CATEGORIES_ACTION_TYPES.SET_CURRENT_CATEGORIES, payload:categories})
// }

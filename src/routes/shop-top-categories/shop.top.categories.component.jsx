import { Routes, Route } from "react-router-dom"
import TopCategoriesPreview from "../top categories preview/top.categories.preview.component";
import TopCategory from "../../components/top Category/top.category.component";

const ShopTopCategories = () => {

    return(
        <Routes>
            <Route index element={<TopCategoriesPreview />} />
            <Route path=":topCategory" element={<TopCategory />} />
            </Routes>
            )
        }
        
        
        
        export default ShopTopCategories;
        // <Route path=":category" element={TopCategory} />
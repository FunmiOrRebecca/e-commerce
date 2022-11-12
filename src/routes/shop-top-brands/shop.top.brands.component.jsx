import { Routes, Route } from "react-router-dom"
import TopBrandsPreview from "../top brands preview/top.brands.preview.component";
import TopBrand from "../../components/top brand/top.brand.component";

const ShopTopBrands= () => {
    return(
        <Routes>
            <Route index element={<TopBrandsPreview/>} />
            <Route path=":topBrand" element={<TopBrand/>} />
            </Routes>
            )
        }
        
        
        export default ShopTopBrands;
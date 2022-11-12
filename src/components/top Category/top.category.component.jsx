import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductsCard from "../products card/products.card.component";
import { selectTopCategoriesProducts } from "../../store/products reducer/products.selector";


const TopCategory = () => {
    const topCategoriesProducts = useSelector(selectTopCategoriesProducts);
    const {topCategory} = useParams();
    const products = topCategoriesProducts.filter((product)=> product.categoryDetails.MainCategory === topCategory)
    return(
        <div>
        <ProductsCard children= {topCategory} headerType="noLinkHeader" products={products}  />
        </div>
    )
}
    

export default TopCategory;
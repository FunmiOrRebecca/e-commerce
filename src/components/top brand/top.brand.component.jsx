import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTopBrandsProducts} from "../../store/products reducer/products.selector";
import ProductCard from "../productCard/card.component";
import ProductsCard from "../products card/products.card.component";

const TopBrand = () => {
    const topBrandsProducts = useSelector(selectTopBrandsProducts);
    const {topBrand} = useParams();
    const products = topBrandsProducts.filter((product)=> product.brandDetails.brandName === topBrand)
    return(
        <div>
           <ProductsCard children={topBrand} headerType="noLinkHeader" products={products}/>
        </div>
    )
}

export default TopBrand;